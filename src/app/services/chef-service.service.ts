import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chef } from '../models/Chef';

@Injectable({
  providedIn: 'root'
})
export class ChefServiceService {

  constructor(private http: HttpClient) { }
  host = environment.host;

  getAllChefs() : Observable<Chef[]> {
   return this.http.get<Chef[]>(this.host+"/chefs");
  }
  
  deleteChef(id: number) : Observable<void> {
    return this.http.delete<void>(this.host+"/chefs/"+id);
  }
  postChef (file:FormData) : Observable<Chef> {
    return this.http.post<Chef>(this.host+"/chefs",file);
  }
  
}
