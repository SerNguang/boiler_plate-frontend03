import { Component, OnInit } from '@angular/core';
import { AuthService } from '../resources/auth.service';
import { NgForm } from '@angular/forms';
import { MockApiCartService } from '../../cart/resources/mock-api-cart.service';
import { User } from '../resources/auth';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private cartService: MockApiCartService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  user: User;

  onSubmit(f: NgForm) {
    this.store.dispatch(
      fromAuthActions.signupPage({
        user: f.value.user
      })
    );
  }
}
