import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LaptopComponent } from '../laptop/laptop.component';
import { LaptopService } from '../laptop/laptop.component.service';

@Component({
  selector: 'app-update-laptop',
  templateUrl: './update-laptop.component.html',
  styleUrls: ['./update-laptop.component.css']
})
export class UpdateLaptopComponent implements OnInit {


  laptop: any;
  laptopService?: LaptopService;
  laptopApp?: LaptopComponent;
  id?: any[];

  constructor(laptopService: LaptopService) {
    this.laptopService = laptopService;
  }

  ngOnInit(): void {
    this.laptop = {};
  }

  atualizar(id: any, frm: NgForm): void {
    this.laptopService?.atualizarLaptop(id, this.laptop).subscribe(data => {
      this.laptop = data;
      frm.reset();
    })
  }

}
