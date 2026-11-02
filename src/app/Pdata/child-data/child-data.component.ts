import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-data',
  standalone: true,
  imports: [],
  templateUrl: './child-data.component.html',
  styleUrl: './child-data.component.css',
})
export class ChildDataComponent {
  @Input() data: string = '';
  @Input() age: number = 0;
}
