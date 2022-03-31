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

  receberId(id: any): void {
    console.log(id);
    console.log("no metodo")
    this.id = id;
    console.log(this.id)
  }

  atualizar(id: any, frm: NgForm): void {
    console.log(id);
    this.totemService?.atualizarTotem(this.id, this.totem).subscribe(data => {
      this.totem = data;
      frm.reset();
    })
  }

}
