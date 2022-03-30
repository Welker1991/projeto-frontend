import { Component, OnInit } from '@angular/core';
import { LaptopService } from './laptop.component.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  laptopService: LaptopService;
  laptops: Array<any> = new Array();
  filter?: any;

  constructor(laptopService: LaptopService) {
    this.laptopService = laptopService;
  }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.laptopService.getLaptops().subscribe(data => this.laptops = data);
  }

}
