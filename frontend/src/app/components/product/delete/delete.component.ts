import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product: Product
  
  //route para pegar a rota
  //router pra usar a rota de voltar
  //na inicialização vai ser preciso fazer uma consulta no back pra preencher os dados do produto
  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  //inicializa o productservice
  ngOnInit(): void {
    const strgId = this.route.snapshot.paramMap.get('id')
    const id = parseInt(strgId)
    this.productService.readById(id).subscribe((product) => {
      this.product = product

    })
  }

  deleteProduct(): void{
     this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!")
      this.router.navigate(["/products"])
    });
    

  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
