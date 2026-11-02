import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDataCComponent } from './parent-data-c.component';

describe('ParentDataCComponent', () => {
  let component: ParentDataCComponent;
  let fixture: ComponentFixture<ParentDataCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentDataCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDataCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
