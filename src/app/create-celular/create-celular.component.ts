import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CelularComponent } from '../celular/celular.component';
import { CelularService } from '../celular/celular.component.services';

@Component({
  selector: 'app-create-celular',
  templateUrl: './create-celular.component.html',
  styleUrls: ['./create-celular.component.css']
})
export class CreateCelularComponent implements OnInit {

  celular: any;
  celularService?: CelularService;
  celularApp?: CelularComponent;

  constructor(celularService: CelularService) {
    this.celularService = celularService;
  }

  ngOnInit(): void {
    this.celular = {};
  }

  criar(frm: NgForm): void {
    this.celularService?.createCelular(this.celular).subscribe(data => {
      this.celular = data;
      frm.reset();
    })
  }
}
