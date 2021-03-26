import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { ListEventComponent } from './event/list-event/list-event.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';

import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UpdateCategorieComponent } from './categorie/update-categorie/update-categorie.component';






const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"add-event",
    component:AddEventComponent 
  },
  {
    path:"list-event",
    component:ListEventComponent 
  },
  {
    path:"list-categorie",
    component:ListCategorieComponent 
  },
 {
path:"list-user",
 component:ListUserComponent
},
{
  path:"add-categorie",
  component:AddCategorieComponent
},
{path: "updateCategorie/:id",
 component:UpdateCategorieComponent}


 
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
