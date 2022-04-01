import { Component, OnInit } from '@angular/core';
import { DesktopService } from './desktop.component.services';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  desktopService: DesktopService;
  desktops: Array<any> = new Array();
  filter: any;

  constructor(desktopService: DesktopService) {
    this.desktopService = desktopService;
  }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.desktopService.getDesktops().subscribe(data => this.desktops = data);
  }

  remover(id: any) {
    this.desktopService.deletarDesktop(id).subscribe();
    this.listar();
  }

}
