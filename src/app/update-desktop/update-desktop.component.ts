import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DesktopComponent } from '../desktop/desktop.component';
import { DesktopService } from '../desktop/desktop.component.services';

@Component({
  selector: 'app-update-desktop',
  templateUrl: './update-desktop.component.html',
  styleUrls: ['./update-desktop.component.css']
})
export class UpdateDesktopComponent implements OnInit {


  desktop: any;
  desktopService?: DesktopService;
  desktopApp?: DesktopComponent;
  id?: any[];

  constructor(desktopService: DesktopService) {
    this.desktopService = desktopService;
  }

  ngOnInit(): void {
    this.desktop = {};
  }

  atualizar(id: any, frm: NgForm): void {
    this.desktopService?.atualizarDesktop(id, this.desktop).subscribe(data => {
      this.desktop = data;
      frm.reset();
    })
  }

}
