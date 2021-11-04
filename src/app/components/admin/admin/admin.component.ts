import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loged : boolean =false;
  wrong : boolean = false;
  email? : String ="" ;
  password? : String ="";
  
  constructor() { }

  ngOnInit(): void {
    let key = localStorage.getItem("key");
    if(key) { 
      this.loged=true;
   }
  }

  checking() {
    if(this.email=== "ala@gmail.com" && this.password==="1234" ) {
      var login = ["ala@gmail.com","1234"];
      localStorage.setItem("key",JSON.stringify(login));
      this.loged=true;
    } else { this.wrong=true; }

  }
  logout() {
    this.loged=false;
    localStorage.removeItem("key");
  }
}
