import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListModel } from '../../models/list.model';
import { ProductModel } from '../../models/product.model';
import { ListsService } from '../../services/lists.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-exercises',
  styleUrls: ['./list-exercises.component.scss'],
  templateUrl: './list-exercises.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListExercisesComponent {
  
  name$: Observable<string[]> = of(['Tom', 'Andrew', 'Chris', 'Peter']);

  readonly crypto$: Observable<ListModel[]> = this._listsService.getAll();

  readonly product$: Observable<ProductModel[]> = this._productService.getAll();

  constructor(
    private _listsService: ListsService,
    private _productService: ProductService
  ) {}
}
