import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/models/Dish';
import { DisheService } from 'src/app/services/dishe.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-display-dishes',
  templateUrl: './display-dishes.component.html',
  styleUrls: ['./display-dishes.component.css']
})
export class DisplayDishesComponent implements OnInit {
  dishes !: Dish[];
  host =environment.host;
  constructor(private dishService : DisheService) { }

  ngOnInit(): void {
    this.getAllDishes();
  }

  getAllDishes() {
    this.dishService.getAllDishes().subscribe(data=> {
      this.dishes=data;
    })
  
  }
  deletDish(id:number) {
    this.dishService.deleteDish(id).subscribe(data => 
      this.getAllDishes()
    );
}
}
