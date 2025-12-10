import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleService } from '../services/title.service';
import { IonContent, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';



@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, FormsModule, AppHeaderComponent, IonInput, IonItem, IonContent,   IonButton, IonCard, IonCardTitle, IonCardContent, IonCardHeader],
})
export class HomePage {
  ingredients: string = '';
  recipes: any[] = [];

  
  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private titleService: TitleService
  ) {
    
  }

  ionViewWillEnter(){
    this.titleService.setTitle("G00438844")
  }
  //Call the search recipes from the recipe service and get any result (all results) and set the array recipes to the result
  searchRecipes() {
    this.recipeService.searchRecipes(this.ingredients).subscribe((res: any) => {
      this.recipes = res.results;
    })
  }

  viewDetails(id: number) {
    this.router.navigate(['/recipe-details', id]);
  }

  goToShoppingList() {
    this.router.navigate(['/shopping-list']);
}
}
