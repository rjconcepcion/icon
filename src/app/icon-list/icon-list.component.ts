import { Component, OnInit } from '@angular/core';
import { Icon } from  '../Icon';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.sass']
})
export class IconListComponent implements OnInit {

  icons : Icon[];

  constructor(private iconService: IconService) { }

  ngOnInit() {
    this.getIcons();
  }

  getIcons(): void {
    this.iconService.getIcons()
        .subscribe(icons => this.icons = icons);
  }

}