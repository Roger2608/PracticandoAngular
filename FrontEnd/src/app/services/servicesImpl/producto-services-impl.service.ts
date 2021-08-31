import { Injectable } from '@angular/core';
import { ProductoService } from '../producto-service';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceImpl implements ProductoService{

  constructor() { }
}
