import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent {
  @Input() cardTitle: string = 'Insert title';
  @Input() icon: string = '';

  @Output() iconClick = new EventEmitter<void>();
}
