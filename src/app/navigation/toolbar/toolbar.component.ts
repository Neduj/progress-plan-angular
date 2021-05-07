import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  lang = 'en';
  constructor(private translateService: TranslateService) {
    translateService.addLangs(['en', 'ru']);
  }

  ngOnInit(): void {
  }

  changeLang(): void {
    if (this.lang === 'en') {
      this.lang = 'ru';
    } else {
      this.lang = 'en';
    }
    this.translateService.use(this.lang.toLowerCase());
  }
}
