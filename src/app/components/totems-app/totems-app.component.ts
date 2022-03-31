import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreateTotemComponent } from 'src/app/create-totem/create-totem.component';
import { UpdateTotemComponent } from 'src/app/update-totem/update-totem.component';
import { Totem } from '../models/totem';
import { TotemService } from './totems-app.component.services';

@Component({
  selector: 'app-totems-app',
  templateUrl: './totems-app.component.html',
  styleUrls: ['./totems-app.component.css']
})
export class TotemsAppComponent implements OnInit {

  totemService: TotemService;
  totems: Array<any> = new Array();
  filter?: any;
  update?: UpdateTotemComponent;

  constructor(totemService: TotemService) {
    this.totemService = totemService;
  }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.totemService.getTotems().subscribe(data => this.totems = data);
  }

  atualizar(id: any): void {
    this.update?.receberId(id)
    console.log(id)
  }

  remover(id: any) { }

}


