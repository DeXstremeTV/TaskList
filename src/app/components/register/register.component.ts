import { Component } from '@angular/core';
import { Register } from '../../model/register';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  providers: [AuthenticationService],
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerDto = new Register();

  constructor( private authService: AuthenticationService) {}

  register(registerDto: Register){
    this.authService.register(registerDto).subscribe();
  }
}

