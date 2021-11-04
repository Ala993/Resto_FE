import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Dish } from '../models/Dish';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DisheService {
host = environment.host;
  constructor(private http : HttpClient) { }

  getAllDishes() : Observable<Dish[]> {
    return this.http.get<Dish[]>(this.host+"/dishes");
   }
   
   deleteDish(id: number) : Observable<void> {
     return this.http.delete<void>(this.host+"/dishes/"+id);
   }
   postDish (file:FormData) : Observable<Dish> {
     return this.http.post<Dish>(this.host+"/dishes",file);
   }
}
