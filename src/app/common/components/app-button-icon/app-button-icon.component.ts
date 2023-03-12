import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './app-button-icon.component.html',
  styleUrls: ['./app-button-icon.component.scss']
})
export class AppButtonIconComponent {
  @Input() icon: string = 'fa-solid fa-house';
  @Input() cssClass: string = '';
}
