import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../../servicios/fake-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  products: any[] = [];
  constructor(private fakeStoreService: FakeStoreService){}

  obtenerProductos():void{
    this.fakeStoreService.getProducts().subscribe(
      data => this.products = data,
      error => console.log(error),
      () => console.log('FIN')
    )
  }

  eliminarProducto(id:number):void{
    this.fakeStoreService.deleteProduct(id).subscribe(
      () => {this.obtenerProductos();}
    )
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }
}
