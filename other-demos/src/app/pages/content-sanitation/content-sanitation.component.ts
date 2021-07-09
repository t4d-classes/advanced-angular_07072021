import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-sanitation',
  templateUrl: './content-sanitation.component.html',
  styleUrls: ['./content-sanitation.component.css']
})
export class ContentSanitationComponent implements OnInit {

  someContent = "<h3>Hello!</h3>";

  clickMeUrl = "javascript:alert(0);";


  clickMeUrlSafe = this.sanitizer.bypassSecurityTrustUrl("javascript:alert(0);");

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
