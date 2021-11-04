import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from 'src/app/models/Dish';
import { DisheService } from 'src/app/services/dishe.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  selectedFile!: File;
  dish: Dish = {
    id: 0,
    name: "",
    description: "",
    price :0,

  }
  constructor(private dishService: DisheService, private router: Router) { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload() {
    const file = new FormData();
    file.append('dish', JSON.stringify(this.dish));
    file.append('file', this.selectedFile, this.selectedFile.name);

    this.dishService.postDish(file).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("menu");
    })
  }
}
