import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  apiKey = '70759a4f7911402abcc53d3c51d3b759';

  constructor(private http: HttpClient){}
  //Go the the site with the query from the search engine and the apiKey above, return the results
  searchRecipes(query: string){
    return this.http.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${this.apiKey}`

    )
  }
  //This does the same but uses the recipt ID instead
  getRecipeDetails(id: number){
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.apiKey}`
    )
  }
  
}
