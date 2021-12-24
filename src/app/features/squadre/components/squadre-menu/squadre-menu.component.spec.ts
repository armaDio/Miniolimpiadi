import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadreMenuComponent } from './squadre-menu.component';

describe('SquadreMenuComponent', () => {
  let component: SquadreMenuComponent;
  let fixture: ComponentFixture<SquadreMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadreMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadreMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
