import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleService } from '../services/title.service';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { RecipeService } from '../services/recipe.service';
import { FavouritesService } from '../services/favourites.service';
import { heart, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonIcon, IonContent, CommonModule, FormsModule, AppHeaderComponent, RouterLink]
})
export class RecipeDetailsPage implements OnInit {

  recipe: any = null;
  unit: string = 'metric'; //Default value
  recipeId: string | null = null;

  isFavourite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService,
    private settingService: SettingsService,
    private recipeService: RecipeService,
    private favouriteService: FavouritesService,
  ) {
    addIcons({ arrowBack, heart, heartOutline });
   }

  ionViewWillEnter(){
    this.titleService.setTitle('Recipe Details');
  }
  
  async ngOnInit() {
    //Read in value from URl, in this case, read the id from the home page
    this.recipeId = this.route.snapshot.paramMap.get('id');

    this.unit = await this.settingService.getUnit();
    //if the recipe has an id, pull the JSON information and pass it into details, we will use it on the html page
    if(this.recipeId) {
      this.recipeService.getRecipeDetails(Number(this.recipeId)).subscribe(async (details) => { 
        this.recipe = details;

        this.isFavourite = await this.favouriteService.isFavourite(this.recipe.id);
      });
    }
  }
  //Checks if recipe is a fav, if it is will remove instead of add
  async toggleFavourite() {
  if (this.isFavourite) {
    await this.favouriteService.removeFavourite(this.recipe.id);
    this.isFavourite = false;
  } else {
    await this.favouriteService.addFavourite(this.recipe);
    this.isFavourite = true;
  }
}

}
