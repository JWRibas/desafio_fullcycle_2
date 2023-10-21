import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  CreateProductResponse,
  FindProductsResponse,
  ProductKeyGrpc,
} from './products.grpc';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class ProductsService implements OnModuleInit {
  private productGrpcService: ProductKeyGrpc;

  constructor(
    @Inject('PRODUCT_SERVICE')
    private GrpcClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.productGrpcService =
      this.GrpcClient.getService<ProductKeyGrpc>('ProductService');
  }

  create(data: {
    name: string;
    description: string;
    price: number;
  }): Observable<CreateProductResponse> {
    return this.productGrpcService.CreateProduct(data);
  }

  findAll(): Observable<FindProductsResponse> {
    return this.productGrpcService.FindProducts({});
  }
}
