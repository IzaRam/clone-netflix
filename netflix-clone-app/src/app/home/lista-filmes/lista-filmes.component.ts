import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Filme } from 'src/app/filme';
import { FilmesService } from 'src/app/filmes.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  filmes: Filme[];

  constructor(private filmeService: FilmesService) { }

  ngOnInit(): void {
    this.bucarFilmes();
  }

  bucarFilmes(): void {
    this.filmeService.buscarTodos().subscribe((filmes) => {
      // this.filmes = filmes;
      this.filmes = filmes.slice(1)
      console.log(this.filmes);
    })
  }

}
