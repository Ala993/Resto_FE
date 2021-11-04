import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
 {path: "", component: HomeComponent},
 {path: "admin", component: AdminComponent},
 {path: "chefs", component: ChefsComponent},
 {path: "menu", component: MenuComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
