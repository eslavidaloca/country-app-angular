import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
    ul :hover {
      background-color: #68DCC989;
      border-color: #68DCC989;
      color: black;
    }

  `]
})
export class SidebarComponent {

}
