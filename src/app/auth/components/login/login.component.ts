import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    ) {
    this.createForm();
  }

  form: FormGroup;

  ngOnInit(): void {

  }



  // tslint:disable-next-line: typedef
  createForm(){
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  // tslint:disable-next-line: typedef
  login(){
    if ( !this.form){
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    console.log(this.form.value);

    this.authService.login(this.form.value)
      .subscribe( resp => {
        Swal.close();
        this.router.navigateByUrl('/home');
        console.log(resp);
      }, (err: any) => {
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: err.error.err.message
        });
      });
  }

}
