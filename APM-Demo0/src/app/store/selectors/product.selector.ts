import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from 'src/app/products/product';
import { ProductState } from '../state/product.state';


const getProductFeatureState = createFeatureSelector<ProductState>('products');
export const getShowProductCode = createSelector(getProductFeatureState, state => state.showProductCode);
