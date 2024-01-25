import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
    {
        path: '',
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: 'login',
        component: LoginComponent,
        title: "Login"
    },
    {
        path: 'todo',
        component: ListComponent,
        title: "Todo"
    },
];
