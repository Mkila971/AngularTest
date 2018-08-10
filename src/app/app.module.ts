import { environment } from '../environments/environment'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from'angularfire2/database';
import { AngularFireAuthModule } from'angularfire2/auth';
import { FormsModule } from'@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ContactComponent } from './contact/contact.component';
import { ReserveComponent } from './reserve/reserve.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


import{ EnregistrementService } from './enregistrement.service';
import{ AuthService } from './auth.service';

import {AuthGuard} from './auth.guard';

 const routes : Routes = [
   {path: '', component: HomeComponent,canActivate:[AuthGuard]},
   {path: 'liste',component: HomeComponent,canActivate:[AuthGuard]},
   {path: 'contact', component: ContactComponent},
   {path: 'login', component: LoginComponent},
   {path: 'admin', component: AdminComponent,canActivate:[AuthGuard]},
 ];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    CarteComponent,
    ContactComponent,
    ReserveComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [EnregistrementService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
