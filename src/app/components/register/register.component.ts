import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/Authentication.service';
import { Register } from '../../model/register';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

