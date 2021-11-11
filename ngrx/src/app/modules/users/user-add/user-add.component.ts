import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { addUser } from '../state/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.store.dispatch(addUser({ user: f.value }));
  }
}
