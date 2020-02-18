import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, select } from '@ngrx/store';
import { ToggleProductCode } from 'src/app/store/actions/product.action';
import { getShowProductCode } from 'src/app/store/selectors/product.selector';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(private productService: ProductService,
              private store: Store<any>) { }

  ngOnInit(): void {

    this.store.pipe(select(getShowProductCode)).subscribe(showProductCode => {
      console.log(showProductCode);
      this.displayCode = showProductCode;
    });
    this.sub = this.productService.selectedProductChanges$.subscribe(
      selectedProduct => this.selectedProduct = selectedProduct
    );

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => this.products = products,
      error: (err: any) => this.errorMessage = err.error
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new ToggleProductCode(value));
  } 

  newProduct(): void {
    this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this.productService.changeSelectedProduct(product);
  }

}
