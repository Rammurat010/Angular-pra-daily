import { Component } from '@angular/core';
import { ChildDataCComponent } from '../child-data-c/child-data-c.component';

@Component({
  selector: 'app-parent-data-c',
  standalone: true,
  imports: [ChildDataCComponent],
  templateUrl: './parent-data-c.component.html',
  styleUrl: './parent-data-c.component.css',
})
export class ParentDataCComponent {
  dataValue = '';
  GetData(data: string): void {
    this.dataValue = data;
  }
}
