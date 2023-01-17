import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories-loading',
  styleUrls: ['./categories-loading.component.scss'],
  templateUrl: './categories-loading.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesLoadingComponent {
  readonly categories$: Observable<ProductModel[]> = this._productService.getAll()
  // .pipe(map(() => []));

  constructor(private _productService: ProductService) {
  }
}
