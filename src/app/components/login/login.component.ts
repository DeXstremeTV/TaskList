import { Component } from '@angular/core';
import { Login } from '../../model/login';
import { JwtAuth } from '../../model/jwt-auth';
import { AuthenticationService } from '../../services/Authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})




export class LoginComponent {
  loginDto = new Login();
  jwtDto = new JwtAuth();

  constructor( private authService: AuthenticationService) {}

  login(loginDto: Login){
    this.authService.login(loginDto).subscribe((jwtDto) => {
      localStorage.setItem('jwtToken', jwtDto.token);
    });
  }
}

