import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ItemListComponent implements OnInit {

  @Input()
  items: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  get rendering() {
    console.log('rendering item list');
    return null;
  }

}
