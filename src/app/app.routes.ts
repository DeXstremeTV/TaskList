import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        canActivate:[],
        path: '',
        component: RegisterComponent,
        title: "Register"
    },
    {
        canActivate:[],
        path: 'login',
        component: LoginComponent,
        title: "Login"
    },
    {
        canActivate:[AuthGuard],
        path: 'todo',
        component: ListComponent,
        title: "Todo"
    },
];
