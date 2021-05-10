import { Component } from '@angular/core';
import {ITopMenu} from "./components/scrollable-tab";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topMenus:ITopMenu[]=[{title:'熱門',link:'#'}, {title:'男裝',link:'#'}, {title:'手機',link:'#'}]
  check(menu:ITopMenu){
    console.log(menu)
  }
}
