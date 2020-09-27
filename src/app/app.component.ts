import { Component } from '@angular/core';
import { Food } from './Model/food';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 public obj: Food[] = [];
constructor(){}

  addFood(food: HTMLInputElement,des: HTMLInputElement){
   this.obj.push(new Food(food.value,des.value));
   food.value = "";
   des.value = "";
   return false;
  }

}
