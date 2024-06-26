import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from "./components/search-box/search-box/search-box.component";
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CardListComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SearchBoxComponent
  ]
})
export class GifsModule { }
