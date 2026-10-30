import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { InterpolationComponent } from './dataBinding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './dataBinding/property-binding/property-binding.component';
import { EventBindingComponent } from './binding/event-binding/event-binding.component';

import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgForComponent } from './directives/ng-for/ng-for.component';
import { NgSwitchComponent } from './directives/ng-switch/ng-switch.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,

    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learning';
}
