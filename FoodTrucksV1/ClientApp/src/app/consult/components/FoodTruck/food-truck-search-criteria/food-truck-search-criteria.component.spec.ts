import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTruckSearchCriteriaComponent } from './food-truck-search-criteria.component';

describe('FoodTruckSearchCriteriaComponent', () => {
  let component: FoodTruckSearchCriteriaComponent;
  let fixture: ComponentFixture<FoodTruckSearchCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTruckSearchCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTruckSearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
