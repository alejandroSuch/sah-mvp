import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sah-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input()
  showFilterBtn: boolean = true;

  @Output()
  filterBtnClicked: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  handleFilterBtnClick() {
    this.filterBtnClicked.emit();
  }

}
