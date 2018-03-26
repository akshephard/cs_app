import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
//components of our page
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InputComponent } from './component/input/input.component';
import { HomeComponent } from './component/home/home.component';
//input validation
import {ValidateService} from './services/validate.service';
//connection to backend
import {AuthService} from './services/auth.service';
import { InstructorsComponent } from './component/instructors/instructors.component';
//import {FlashMessageModule} from 'angular-flash-message';

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'input', component: InputComponent},
  {path:'instructors', component: InstructorsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputComponent,
    HomeComponent,
    InstructorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    //FlashMessageModule
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
