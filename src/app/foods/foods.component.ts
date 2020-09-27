import { Component, OnInit, Input,HostBinding} from '@angular/core';
import { Food } from '../Model/food';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  @HostBinding('attr.class') cssClass ='row';
  @Input() foods: Food;
  constructor() { 
    console.log(this.foods )
  }

  ngOnInit(): void {
  }

}
