import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild(NgModel)
  messageInput!: FormControl;

  message = "";

  constructor() { }

  ngOnInit(): void {
  }

  clickMe() {
    console.log(this.messageInput);
  }

}
