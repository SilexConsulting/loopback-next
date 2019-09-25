import {Entity, model, property} from '@loopback/repository';
import {Customer} from './customer.model';

@model({settings: {}})
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id: number;

  @property({
    type: 'string',
  })
  orderNumber: string;

  @property({
    type: Customer,
    required: true,
  })
  customer: Customer;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
