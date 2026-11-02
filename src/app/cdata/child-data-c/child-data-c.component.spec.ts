import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDataCComponent } from './child-data-c.component';

describe('ChildDataCComponent', () => {
  let component: ChildDataCComponent;
  let fixture: ComponentFixture<ChildDataCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildDataCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDataCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
