import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseEssayComponent } from './house-essay.component';

describe('HouseEssayComponent', () => {
  let component: HouseEssayComponent;
  let fixture: ComponentFixture<HouseEssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseEssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
