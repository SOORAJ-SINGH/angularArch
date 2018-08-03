import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/Login/login/login.component';
import { HomeComponent } from './Components/Home/home/home.component';

const routes: Routes = [
    // map
    {
      path: 'Login',
      component: LoginComponent,
      // canActivate: [AuthenticationGuard] // uncomment guard when goes live
    },
    {
        path: 'home',
        component: HomeComponent,
        // canActivate: [AuthenticationGuard] // uncomment guard when goes live
      },
    {
      path: '',
      redirectTo: '/Login',
      pathMatch: 'full'
    }
  ];
  
  export const AppRoutingModule = RouterModule.forRoot(routes);