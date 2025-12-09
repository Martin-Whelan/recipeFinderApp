import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {

  private storageKey = 'favourites';
  private storageDb: Storage | null = null;

  constructor(private storage: Storage) {
    this.init()
  }

  async init(){
    this.storage = await this.storage?.create();
  }

  async getFavourites(){
    return (await this.storage?.get(this.storageKey)) || [];
  }

  async addFavourite(recipe: any) {
    const favs = await this.getFavourites();
    favs.push(recipe);
    await this.storage?.set(this.storageKey, favs);
  }

  async removeFavourite(id: number) {
    let favs = await this.getFavourites();
    favs = favs.filter((r: any) => r.id !== id);
    await this.storage?.set(this.storageKey, favs);
  }

  async isFavourite(id: number) {
    const favs = await this.getFavourites();
    return favs.some((r: any) => r.id === id);
  }
  
}
