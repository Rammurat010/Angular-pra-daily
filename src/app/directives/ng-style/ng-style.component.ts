import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './ng-style.component.html',
})
export class NgStyleComponent {
  color = 'blue';
}
