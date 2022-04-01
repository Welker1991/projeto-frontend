import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TabletComponent } from '../tablet/tablet.component';
import { TabletService } from '../tablet/tablet.component.service';

@Component({
  selector: 'app-update-tablet',
  templateUrl: './update-tablet.component.html',
  styleUrls: ['./update-tablet.component.css']
})
export class UpdateTabletComponent implements OnInit {

  tablet: any;
  tabletService?: TabletService;
  tabletApp?: TabletComponent;
  id?: any[];

  constructor(tabletService: TabletService) {
    this.tabletService = tabletService;
  }

  ngOnInit(): void {
    this.tablet = {};
  }

  atualizar(id: any, frm: NgForm): void {
    this.tabletService?.atualizarTablet(id, this.tablet).subscribe(data => {
      this.tablet = data;
      frm.reset();
    })
  }
}
