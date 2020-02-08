import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material'
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})


export class GeneratorComponent implements OnInit {


  buttonOptions: string[] = ['Single', 'Multiple']
  isSingle: boolean = true;
  singleSerialNumber: string;
  range: any = {
    from: "",
    to: ""
  }

  qrCodes: Array<String> = [];

  radioChange(event:MatRadioChange) {
    if(event.value == "Single"){
      this.isSingle = true
    }else{
    this.isSingle   = false
    }
  }

  generateQRCodes() {
    this.qrCodes = []
    if (this.isSingle) {
      this.qrCodes.push(this.singleSerialNumber)
    } else {
      var from = +this.range.from;
      var to = +this.range.to;
      var amouth = to - from;
      for(var i = 0; i < amouth; i++){
        var currentCode = from + i;
        this.qrCodes.push(currentCode.toString())
      }
    }

  }

  constructor() {
  }

  ngOnInit() {

  }

}
