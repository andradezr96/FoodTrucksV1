import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodTruckListComponent } from './components/FoodTruck/food-truck-list/food-truck-list.component';
import { FoodTruckSearchCriteriaComponent } from './components/FoodTruck/food-truck-search-criteria/food-truck-search-criteria.component';



@NgModule({
  declarations: [
    FoodTruckListComponent,
    FoodTruckSearchCriteriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FoodTruckListComponent,
    FoodTruckSearchCriteriaComponent
  ]
})
export class ConsultModule { }
