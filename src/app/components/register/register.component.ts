import { Component } from '@angular/core';
import { Register } from '../../model/register';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  providers: [AuthenticationService],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerDto = new Register();

  constructor(private authService: AuthenticationService, private router: Router) {}

  register(registerDto: Register){
    this.authService.register(registerDto).subscribe((resp) =>{
      if(resp.result){
        this.router.navigate(["login"]);
      }
    });
  }
}

