import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(private authServise: AuthService, private alerify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authServise.register(this.model).subscribe(() => {
      this.alerify.success('Registration successful');
    }, error => {
      this.alerify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
