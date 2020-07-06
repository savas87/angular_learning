import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.sass"],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe(
    "Dummy",
    "dummy",
    "https://previews.123rf.com/images/yavuzunlu/yavuzunlu1210/yavuzunlu121000017/15804975-d-baby-s-dummy-isoliert-auf-wei%C3%9Fem-hintergrund.jpg"
  );
  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
