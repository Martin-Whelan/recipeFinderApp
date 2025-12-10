import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { RecipeService } from './recipe.service';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {

  private storageKey = 'favourites';
  private storageDb: Storage | null = null;

  constructor(
    private storage: Storage,
    private recipeService: RecipeService,
    private settingsService: SettingsService
    ) {
    this.init()
  }

  async init(){
    this.storageDb = await this.storage.create();
  }

  async getFavourites(){
    //Returns the array 'favourites' as that is the storagekey
    return (await this.storageDb?.get(this.storageKey)) || [];
  }

  async addFavourite(recipe: any) {
    //Get the favourites array, push the new recipe into the array and then save it to storage with the favourites key and the new updated array
    const favs = await this.getFavourites();
    favs.push(recipe);
    await this.storageDb?.set(this.storageKey, favs);
  }

  async removeFavourite(id: number) {
    let favs = await this.getFavourites();
    favs = favs.filter((r: any) => r.id !== id);
    await this.storageDb?.set(this.storageKey, favs);
  }

  async isFavourite(id: number) {
    const favs = await this.getFavourites();
    return favs.some((r: any) => r.id === id);
  }

  //we grab the list of favourites and the unit chosen, then create a new array, and for each recipe in favs list we extract the unit, name and measures
  async generateShoppingList() {
    const favs = await this.getFavourites();
    const unit = await this.settingsService.getUnit();

    let allIngredients : any[] = [];

    for (const recipe of favs) {
      const details: any = await this.recipeService.getRecipeDetails(recipe.id).toPromise();

      details.extendedIngredients.forEach((ingredients:any) => {
        const measure = ingredients.measures[unit] || {amount : 1, unitShort: ''};
        //Populate array with name, amount and unit
        allIngredients.push({
          name: ingredients.originalName || ingredients.name,
          amount: measure.amount,
          unit: measure.unitShort
        });
    });
  }

    //remove duplicate ingredient names
    const unique = new Map();
    allIngredients.forEach(item =>{
      if(!unique.has(item.name)){
        unique.set(item.name, item);
      }
    })
    //we then take the above new unique array and push it into the shoppingList constant, with the ...item - which copies all properties in the object, as well as strating with checked false
    const shoppingList = Array.from(unique.values()).map(item => ({
      ...item,
      checked: false
    }));

    //Save the shopping list
    await this.storageDb!.set('shoppingList', shoppingList)
  }
}
