import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Chef } from 'src/app/models/Chef';
import { ChefServiceService } from 'src/app/services/chef-service.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  selectedFile!:File;
  chef: Chef = {
    name :"",
    position : "",
    birthDate : new Date ,
    id : 0,

  };
  constructor(private chefService : ChefServiceService, private router : Router ) { }

  ngOnInit(): void {
  }
  onFileSelected(event:any) {
    console.log(event);
    this.selectedFile =<File> event.target.files[0];
  } 
  onUpload(){
    const file = new FormData();
    file.append('chef', JSON.stringify(this.chef));
    file.append('file', this.selectedFile, this.selectedFile.name );
    
    this.chefService.postChef(file).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("chefs");
    })
    

  }

}
