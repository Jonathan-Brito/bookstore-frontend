import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria-read/categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    name: '',
    description: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.categoria).subscribe((resposta) => {
      this.router.navigate([`categories`])
      this.service.mensagem("Categoria criada com sucesso!");
    }, err => {
      for(let i = 0; i< err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

}
