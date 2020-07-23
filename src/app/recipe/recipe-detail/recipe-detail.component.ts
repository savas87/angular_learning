import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.sass"],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private sls: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => (this.selectedRecipe = recipe)
    );
  }
  onAddToList() {
    this.sls.addIngredients(this.selectedRecipe.ingredients);
    console.log("x");
  }
}
