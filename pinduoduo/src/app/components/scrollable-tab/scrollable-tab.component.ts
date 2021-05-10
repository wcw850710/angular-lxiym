import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export type ITopMenu={
  readonly title:string
  readonly link:string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit {
  @Input()
  menus:ITopMenu[]=[{title:'1',link:'#'}]
  @Output()
  tabSelected=new EventEmitter()
  selectedMenuIndex=0

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedMenu(i:number) {
    this.selectedMenuIndex=i
    this.tabSelected.emit(this.menus[i])
  }

  trackByFn(i:number,e:ITopMenu) {
    return e.title
  }

  checkSelected(i:number) {
    return this.selectedMenuIndex===i
  }
}
