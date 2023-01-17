import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListExercisesComponent } from './components/list-exercises/list-exercises.component';
import { HollydayComponent } from './components/hollyday/hollyday.component';
import { ProductLoadingListComponent } from './components/product-loading-list/product-loading-list.component';
import { LoadingChipListComponent } from './components/loading-chip-list/loading-chip-list.component';
import { CategoriesLoadingComponent } from './components/categories-loading/categories-loading.component';
import { ListExercisesComponentModule } from './components/list-exercises/list-exercises.component-module';
import { HollydayComponentModule } from './components/hollyday/hollyday.component-module';
import { ProductLoadingListComponentModule } from './components/product-loading-list/product-loading-list.component-module';
import { LoadingChipListComponentModule } from './components/loading-chip-list/loading-chip-list.component-module';
import { CategoriesLoadingComponentModule } from './components/categories-loading/categories-loading.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'lists', component: ListExercisesComponent },
      { path: 'public-holidays', component: HollydayComponent },
      { path: 'products', component: ProductLoadingListComponent },
      { path: 'crypto', component: LoadingChipListComponent },
      { path: 'categories', component: CategoriesLoadingComponent },
    ]),
    ListExercisesComponentModule,
    HollydayComponentModule,
    ProductLoadingListComponentModule,
    LoadingChipListComponentModule,
    CategoriesLoadingComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
