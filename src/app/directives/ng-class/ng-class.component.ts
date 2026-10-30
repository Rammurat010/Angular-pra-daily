import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ng-class.component.html',
})
export class NgClassComponent {
  isActive = true;
}
