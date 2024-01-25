import { Component } from '@angular/core';
import { Login } from '../../model/login';
import { JwtAuth } from '../../model/jwt-auth';
import { AuthenticationService } from '../../services/authentication.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginDto = new Login();
  jwtDto = new JwtAuth();

  constructor( private authService: AuthenticationService, private router: Router) {}

  login(loginDto: Login){
    this.authService.login(loginDto).subscribe((jwtDto) => {
      localStorage.setItem('jwtToken', jwtDto.token);
      if(jwtDto.result){
        this.router.navigate(["todo"]);
      }
    });
  }
}

