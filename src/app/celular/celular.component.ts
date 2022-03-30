import { Component, OnInit } from '@angular/core';
import { CelularService } from './celular.component.services';

@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.css']
})
export class CelularComponent implements OnInit {

  celularService: CelularService;
  celulares: Array<any> = new Array();
  filter: any;

  constructor(celularService: CelularService) {
    this.celularService = celularService;
  }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.celularService.getCelulares().subscribe(data => this.celulares = data);
  }

}
