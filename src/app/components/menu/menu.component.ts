import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/models/Dish';
import { DisheService } from 'src/app/services/dishe.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes !: Dish[];
  host = environment.host;
  constructor(private dishService : DisheService) { }

  ngOnInit(): void {
    this.dishService.getAllDishes().subscribe(data => {
      this.dishes = data ;
    })

  }

}
