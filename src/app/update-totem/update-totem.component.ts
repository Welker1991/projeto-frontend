import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TotemsAppComponent } from '../components/totems-app/totems-app.component';
import { TotemService } from '../components/totems-app/totems-app.component.services';

@Component({
  selector: 'app-update-totem',
  templateUrl: './update-totem.component.html',
  styleUrls: ['./update-totem.component.css']
})
export class UpdateTotemComponent implements OnInit {


  totem: any;
  totemService?: TotemService;
  totemApp?: TotemsAppComponent;
  id?: any[];

  constructor(totemService: TotemService) {
    this.totemService = totemService;
  }

  ngOnInit(): void {
    this.totem = {};
  }

  atualizar(id: any, frm: NgForm): void {
    this.totemService?.atualizarTotem(id, this.totem).subscribe(data => {
      this.totem = data;
      frm.reset();
    })
  }

}
