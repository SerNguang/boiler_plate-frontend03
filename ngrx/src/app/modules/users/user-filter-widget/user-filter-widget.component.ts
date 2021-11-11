import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserFilter } from '../resources/user';

@Component({
  selector: 'app-user-filter-widget',
  templateUrl: './user-filter-widget.component.html',
  styleUrls: ['./user-filter-widget.component.scss'],
})
export class UserFilterWidgetComponent implements OnInit {
  constructor() {}

  radioSel: any;
  radioSelected: string;
  radioSelectedString: string;

  @Output() selectedRadioEvent = new EventEmitter();

  PriceOptions: UserFilter[] = [
  ];

  getSelecteditem() {
  }

  onItemChange(item) {
    this.selectedRadioEvent.emit(item);
    this.getSelecteditem();
  }

  ngOnInit(): void {
    this.radioSelected = 'pricerange_1';
    this.getSelecteditem();
  }
}
