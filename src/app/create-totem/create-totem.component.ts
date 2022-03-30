import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { TotemsAppComponent } from '../components/totems-app/totems-app.component';
import { TotemService } from '../components/totems-app/totems-app.component.services';

@Component({
  selector: 'app-create-totem',
  templateUrl: './create-totem.component.html',
  styleUrls: ['./create-totem.component.css']
})
export class CreateTotemComponent implements OnInit {

  totem: any;
  totemService?: TotemService;
  totemApp?: TotemsAppComponent;

  constructor(totemService: TotemService) {
    this.totemService = totemService;
  }

  ngOnInit(): void {
    this.totem = {};
  }

  criar(frm: NgForm): void {
    this.totemService?.createTotem(this.totem).subscribe(data => {
      this.totem = data;
      frm.reset();
    })

  }
}
