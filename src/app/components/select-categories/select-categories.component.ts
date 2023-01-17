import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-select-categories',
  styleUrls: ['./select-categories.component.scss'],
  templateUrl: './select-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCategoriesComponent {
  readonly selectCategory$: Observable<ProductModel[]> = this._productService.getAll();

  constructor(private _productService: ProductService) {
  }
}
