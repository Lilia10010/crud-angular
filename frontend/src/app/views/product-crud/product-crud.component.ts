import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import {MatButton} from '@angular/material/button';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de produto',
      icon: 'touch_app',
      routeUrl: '/products'
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    // console.log('Navegando ...')
    this.router.navigate(['/products/create'])
  }

}
