import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';

import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { IconsComponent } from './icons/icons.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {  MatIconModule } from '@angular/material/Icon';
import {   MatToolbarModule } from '@angular/material/Toolbar';

import {MatMenuModule} from '@angular/material/Menu';
import { MatSidenavModule } from '@angular/material/Sidenav';
import {  MatListModule } from '@angular/material/List';
import {MatDatepickerModule} from '@angular/material/Datepicker';


import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatRadioModule} from '@angular/material/radio';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/Table';
import {  MatPaginatorModule} from '@angular/material/Paginator';
 
import {MatSortModule} from '@angular/material/Sort';
import {MatProgressBarModule} from '@angular/material/Progress-Bar';
import {MatCheckboxModule} from '@angular/material/checkbox';



import { AddEventComponent } from './event/add-event/add-event.component';
import { ListEventComponent } from './event/list-event/list-event.component';
import { ToastrModule } from 'ngx-toastr';


import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';

import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UpdateCategorieComponent } from './categorie/update-categorie/update-categorie.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';




 






@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPseudoCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatGridListModule,
  MatDialogModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatProgressBarModule,
  MatSliderModule,
  MatCheckboxModule,
  BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    RegisterComponent,
    LoginComponent,
    ListCategorieComponent,
    AddEventComponent,
    ListEventComponent,

    AddCategorieComponent,

    ListUserComponent,

    UpdateCategorieComponent,
  

    

  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
