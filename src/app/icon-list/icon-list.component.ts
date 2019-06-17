import { Component, OnInit, Input } from '@angular/core';
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
    console.log('starting');
    this.iconService.getIcons()
    .subscribe(
      icons => {
        this.icons = icons;
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log('complete1');
      }
    );
  }

}