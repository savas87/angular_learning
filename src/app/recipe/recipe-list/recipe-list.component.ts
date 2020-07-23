import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.sass"],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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
  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
