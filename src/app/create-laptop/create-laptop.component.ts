import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LaptopComponent } from '../laptop/laptop.component';
import { LaptopService } from '../laptop/laptop.component.service';

@Component({
  selector: 'app-create-laptop',
  templateUrl: './create-laptop.component.html',
  styleUrls: ['./create-laptop.component.css']
})
export class CreateLaptopComponent implements OnInit {

  laptop: any;
  laptopService?: LaptopService;
  laptopApp?: LaptopComponent;

  constructor(laptopService: LaptopService) {
    this.laptopService = laptopService;
  }

  ngOnInit(): void {
    this.laptop = {};
  }

  criar(frm: NgForm): void {
    this.laptopService?.createLaptop(this.laptop).subscribe(data => {
      this.laptop = data;
      frm.reset();
    })

  }

}
