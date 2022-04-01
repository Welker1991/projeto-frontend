import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CelularComponent } from '../celular/celular.component';
import { CelularService } from '../celular/celular.component.services';

@Component({
  selector: 'app-update-celular',
  templateUrl: './update-celular.component.html',
  styleUrls: ['./update-celular.component.css']
})
export class UpdateCelularComponent implements OnInit {

  celular: any;
  celularService?: CelularService;
  celularApp?: CelularComponent;
  id?: any[];

  constructor(celularService: CelularService) {
    this.celularService = celularService;
  }

  ngOnInit(): void {
    this.celular = {};
  }

  atualizar(id: any, frm: NgForm): void {
    this.celularService?.atualizarCelular(id, this.celular).subscribe(data => {
      this.celular = data;
      frm.reset();
    })
  }
}
