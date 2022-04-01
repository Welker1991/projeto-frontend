import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

@Injectable({
  providedIn: 'root'
})
export class TotemsAppComponent implements OnInit {

  totemService: TotemService;
  totems: Array<any> = new Array();
  filter?: any;
  totem: any;
  id: any;
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

  remover(id: any) {
    this.totemService.deletarTotem(id).subscribe();
    this.listar();
  }

}


