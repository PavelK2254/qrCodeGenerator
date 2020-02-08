import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-qr-model',
  templateUrl: './qr-model.component.html',
  styleUrls: ['./qr-model.component.css']
})
export class QrModelComponent implements OnInit,AfterViewInit {

  @ViewChild('qrItem',{static:false}) qrItem;

  ngAfterViewInit(): void {
    console.log(this.qrItem)
  }


 serialNumber:String = "pavel4567";

  constructor() { }

  ngOnInit() {
  }

}
