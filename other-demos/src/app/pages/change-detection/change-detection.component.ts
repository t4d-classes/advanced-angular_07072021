import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-change-detection',
    templateUrl: './change-detection.component.html',
    styleUrls: ['./change-detection.component.css'],
})
export class ChangeDetectionComponent implements OnInit {

    newColorInput = new FormControl('');
    colors: string[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    addColor() {
        // this.colors.push(this.newColorInput.value);
        this.colors = [
            ...this.colors,
            this.newColorInput.value,
        ];


        //console.log(this.colors);

        this.newColorInput.setValue('');
    }
}
