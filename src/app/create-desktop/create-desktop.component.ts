import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DesktopComponent } from '../desktop/desktop.component';
import { DesktopService } from '../desktop/desktop.component.services';

@Component({
  selector: 'app-create-desktop',
  templateUrl: './create-desktop.component.html',
  styleUrls: ['./create-desktop.component.css']
})
export class CreateDesktopComponent implements OnInit {

  desktop: any;
  desktopService?: DesktopService;
  desktopApp?: DesktopComponent;

  constructor(desktopService: DesktopService) {
    this.desktopService = desktopService;
  }

  ngOnInit(): void {
    this.desktop = {};
  }

  criar(frm: NgForm): void {
    this.desktopService?.createDesktop(this.desktop).subscribe(data => {
      this.desktop = data;
      frm.reset();
    })

  }
}

