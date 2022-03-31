import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TabletComponent } from '../tablet/tablet.component';
import { TabletService } from '../tablet/tablet.component.service';

@Component({
  selector: 'app-create-tablet',
  templateUrl: './create-tablet.component.html',
  styleUrls: ['./create-tablet.component.css']
})
export class CreateTabletComponent implements OnInit {

  tablet: any;
  tabletService?: TabletService;
  tabletApp?: TabletComponent;

  constructor(tabletService: TabletService) {
    this.tabletService = tabletService;
  }

  ngOnInit(): void {
    this.tablet = {};
  }

  criar(frm: NgForm): void {
    this.tabletService?.createTablet(this.tablet).subscribe(data => {
      this.tablet = data;
      frm.reset();
    })
  }

}
