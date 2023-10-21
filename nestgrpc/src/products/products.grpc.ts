import { Observable } from 'rxjs';

export interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
}

export interface CreateProductResponse {
  product: Product;
}

export interface FindProductsResponse {
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface ProductKeyGrpc {
  CreateProduct: (
    data: CreateProductRequest,
  ) => Observable<CreateProductResponse>;
  FindProducts: (_: {}) => Observable<FindProductsResponse>;
}
