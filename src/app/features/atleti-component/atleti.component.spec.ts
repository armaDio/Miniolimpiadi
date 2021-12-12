import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletiComponentComponent } from './atleti-component.component';

describe('AtletiComponentComponent', () => {
  let component: AtletiComponentComponent;
  let fixture: ComponentFixture<AtletiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtletiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
