import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-data-c',
  standalone: true,
  imports: [],
  templateUrl: './child-data-c.component.html',
  styleUrl: './child-data-c.component.css',
})
export class ChildDataCComponent {
  @Output() sendData = new EventEmitter<string>();
  name = 'murat';
  SendData(): void {
    this.sendData.emit(this.name);
  }
}
