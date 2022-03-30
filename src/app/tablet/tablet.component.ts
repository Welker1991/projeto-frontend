import { Component, OnInit } from '@angular/core';
import { TabletService } from './tablet.component.service';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css']
})
export class TabletComponent implements OnInit {


  tabletService: TabletService;
  tablets: Array<any> = new Array();
  filter: any;

  constructor(tabletService: TabletService) {
    this.tabletService = tabletService;
  }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.tabletService.getTablets().subscribe(data => this.tablets = data);
  }

}
