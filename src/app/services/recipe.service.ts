import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  apiKey = '70759a4f7911402abcc53d3c51d3b759';

  constructor(private http: HttpClient){}

  searchRecipes(query: string){
    return this.http.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${this.apiKey}`

    )
  }

  getRecipeDetails(id: number){
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.apiKey}`
    )
  }
  
}
