import { Recipe } from "./recipe.model";
import { Ingredient } from "./shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Schnitzel",
      "Sehe lecker",
      "https://cdn.gutekueche.de/upload/rezept/371/wiener-schnitzel.jpg",
      [new Ingredient("Pommes", 10), new Ingredient("Schnitzel", 1)]
    ),
    new Recipe(
      "Salat",
      "Veganer Salat für alle",
      "https://cdn.gutekueche.de/upload/rezept/2205/reissalat.jpg",
      [new Ingredient("", 0)]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes;
  }
}
