import { Component, OnInit } from '@angular/core';
import { Chef } from 'src/app/models/Chef';
import { ChefServiceService } from 'src/app/services/chef-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-display-chefs',
  templateUrl: './display-chefs.component.html',
  styleUrls: ['./display-chefs.component.css']
})
export class DisplayChefsComponent implements OnInit {
  chefs?: Chef[]
  host = environment.host;
  constructor(public chefService : ChefServiceService) { }

  ngOnInit(): void {
  this.getAllChefs();
  }
  deletChef(id:number) {
    this.chefService.deleteChef(id).subscribe(data => 
      this.getAllChefs()
    );
    
  }
  getAllChefs() {
    this.chefService.getAllChefs().subscribe(data=> {
      this.chefs=data;
    })
  
  }
  
}
