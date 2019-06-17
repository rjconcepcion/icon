import { Component, OnInit } from '@angular/core';
import { Icon } from  '../Icon';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  icons : Icon[];
  constructor(private iconService: IconService) { }

  ngOnInit() {

   
  }

  add(name: string): void {    
    this.iconService.addIcon({
      name : name.trim(),
      hp: this.iconService.rand(8,10),
      rock:this.iconService.rand(4,9),
      paper:this.iconService.rand(4,9),
      scissor:this.iconService.rand(4,9),
    } as Icon)
    .subscribe(icon => {

      // var test = {
      //   _id : 'adasdad',
      //   name : 'testing',
      //   hp: 1,
      //   rock:2,
      //   paper:1,
      //   scissor:1,
      // };

      // this.icons.push(test);

      // console.log(this.icons);

    });


  }


}
