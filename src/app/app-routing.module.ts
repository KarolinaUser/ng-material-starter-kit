import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListExercisesComponent } from './components/list-exercises/list-exercises.component';
import { HollydayComponent } from './components/hollyday/hollyday.component';
import { ProductLoadingListComponent } from './components/product-loading-list/product-loading-list.component';
import { LoadingChipListComponent } from './components/loading-chip-list/loading-chip-list.component';
import { CategoriesLoadingComponent } from './components/categories-loading/categories-loading.component';
import { SelectCategoriesComponent } from './components/select-categories/select-categories.component';
import { CryptoTableComponent } from './components/crypto-table/crypto-table.component';
import { JobComponent } from './components/job/job.component';
import { ListExercisesComponentModule } from './components/list-exercises/list-exercises.component-module';
import { HollydayComponentModule } from './components/hollyday/hollyday.component-module';
import { ProductLoadingListComponentModule } from './components/product-loading-list/product-loading-list.component-module';
import { LoadingChipListComponentModule } from './components/loading-chip-list/loading-chip-list.component-module';
import { CategoriesLoadingComponentModule } from './components/categories-loading/categories-loading.component-module';
import { SelectCategoriesComponentModule } from './components/select-categories/select-categories.component-module';
import { CryptoTableComponentModule } from './components/crypto-table/crypto-table.component-module';
import { JobComponentModule } from './components/job/job.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'lists', component: ListExercisesComponent },
      { path: 'public-holidays', component: HollydayComponent },
      { path: 'products', component: ProductLoadingListComponent },
      { path: 'crypto', component: LoadingChipListComponent },
      { path: 'categories', component: CategoriesLoadingComponent },
      { path: 'category', component: SelectCategoriesComponent },
      { path: 'crypto-table', component: CryptoTableComponent },
      { path: 'job-post-table', component: JobComponent }
    ]),
    ListExercisesComponentModule,
    HollydayComponentModule,
    ProductLoadingListComponentModule,
    LoadingChipListComponentModule,
    CategoriesLoadingComponentModule,
    SelectCategoriesComponentModule,
    CryptoTableComponentModule,
    JobComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
