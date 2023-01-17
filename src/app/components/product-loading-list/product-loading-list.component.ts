import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductNameModel } from '../../models/product-name.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-loading-list',
  styleUrls: ['./product-loading-list.component.scss'],
  templateUrl: './product-loading-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductLoadingListComponent {
  readonly productName$: Observable<ProductNameModel[]> = this._productsService.getAll();

  constructor(private _productsService: ProductsService) {
  }
}
