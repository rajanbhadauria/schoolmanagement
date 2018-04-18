import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HomeComponent } from './home/home.component';
import { AuthGaurd } from './common_helper/auth-gaurd.service';
import { FeestructureComponent } from './feestructure/feestructure.component';
import { FeestructureService } from './feestructure/feestructure.service';
import { ManageSessionComponent } from './manage-session/manage-session.component';
import { ManageSessionService } from './manage-session/manage-session.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    FeestructureComponent,
    ManageSessionComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    AngularFontAwesomeModule,

    RouterModule.forRoot([
      { path: "signup", component: SignupComponent },
      { path: "login", component: LoginComponent},
      { path: "home", component: HomeComponent, canActivate: [AuthGaurd]},
      { path: "settings/fee-structure", component: FeestructureComponent, canActivate: [AuthGaurd]},
      { path: "settings/manage-session", component: ManageSessionComponent, canActivate: [AuthGaurd]}
    ],
   // {enableTracing: true} // <-- debugging purposes only
  )
  ],
  providers: [
    SignupService,
    ErrorService,
    LoginService,
    FeestructureService,
    ManageSessionService,
    AuthGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
