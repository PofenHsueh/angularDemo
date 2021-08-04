import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() 
  item:any;
  opened:Boolean = false;

  toggleOpen(){
    if(this.item.subMenus && this.item.subMenus.length){
       this.opened = !this.opened
    }
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}
