import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from './categoria.model';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  categories: Categoria[] = []

  displayedColumns: string[] = ['id', 'name', 'description', 'book', 'acoes'];

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.findAll();
  }
  
  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.categories = resposta;
    })
  }
}
