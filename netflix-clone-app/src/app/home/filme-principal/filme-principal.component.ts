import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/filme';
import { FilmesService } from 'src/app/filmes.service';

@Component({
  selector: 'app-filme-principal',
  templateUrl: './filme-principal.component.html',
  styleUrls: ['./filme-principal.component.css']
})
export class FilmePrincipalComponent implements OnInit {

  filme: Filme = {
    titulo: '',
    urlFoto: '',
    descricao: ''
  };

  constructor(private filmeService: FilmesService) { }

  ngOnInit(): void {
    this.buscarFilme();
  }

  private buscarFilme(): void {
    this.filmeService.buscar(1).subscribe((filme: Filme) => {
      this.filme = filme;
    });
  }

}
