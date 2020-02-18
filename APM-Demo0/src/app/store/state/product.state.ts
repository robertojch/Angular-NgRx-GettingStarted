import { Product } from 'src/app/products/product';
import * as fromRoot from './app.state';

export interface State extends fromRoot.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number;
    products: Product[];
    error: string;
}

export const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
}

