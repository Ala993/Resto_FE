import { Component, OnInit } from '@angular/core';
import { Chef } from 'src/app/models/Chef';
import { ChefServiceService } from 'src/app/services/chef-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  chefs! : Chef[];
  host = environment.host;
  constructor(private chefService : ChefServiceService) { }

  ngOnInit(): void {
  this.chefService.getAllChefs().subscribe(data =>{
    this.chefs = data;
  })
  }

}
