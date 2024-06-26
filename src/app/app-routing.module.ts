import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RequestInfoComponent } from './components/request-info/request-info.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PortfolioInfoComponent } from './components/portfolio-info/portfolio-info.component';
import { CommonFaqComponent } from './components/common-faq/common-faq.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AlbumComponent } from './components/album/album.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'requestInfo',
    component: RequestInfoComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'commonfaq',
    component: CommonFaqComponent,
  },
  {
    path: 'portfolioinfo',
    component: PortfolioInfoComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'album',
    component: AlbumComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
