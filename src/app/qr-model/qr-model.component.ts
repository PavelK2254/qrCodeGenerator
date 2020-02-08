import { Component, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-qr-model',
  templateUrl: './qr-model.component.html',
  styleUrls: ['./qr-model.component.css']
})
export class QrModelComponent implements OnInit,AfterViewInit {



  ngAfterViewInit(): void {

  }


 serialNumber:String = "pavel4567";

  constructor() { }

  ngOnInit() {
  }

}
