import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../recipe/shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styles: [],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor() {}

  ngOnInit(): void {}
}
