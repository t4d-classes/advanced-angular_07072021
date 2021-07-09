import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-single-slot-box',
    templateUrl: './single-slot-box.component.html',
    styleUrls: ['./single-slot-box.component.css']
})
export class SingleSlotBoxComponent implements OnInit {

    @Input()
    headerText = "";

    constructor() { }

    ngOnInit(): void {
    }

}
