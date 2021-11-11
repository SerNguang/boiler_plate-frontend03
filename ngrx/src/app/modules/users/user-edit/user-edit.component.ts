import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../resources/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as fromUserActions from '../state/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private store: Store<AppState>
  ) {}

  model: any = {};

  ngOnInit() {
    this.spinner.show();
    this.service
      .getUser(this.route.snapshot.paramMap.get('id'))
      .subscribe((user) => (this.model = user));
    //Remove setTimeout in production
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  onSubmit() {
    this.store.dispatch(
      fromUserActions.upsertUser({ user: this.model })
    );
  }
}
