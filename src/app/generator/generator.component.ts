import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory, Directive } from '@angular/core';
import { QrModelComponent } from '../qr-model/qr-model.component';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})

@Directive({
  selector: '[qrHolder]'
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

  radioChange(event) {
    if(event.value == "Single"){
      this.isSingle = true
    }else{
    this.isSingle   = false
    }
    console.log(`Is single: ${this.isSingle}`)
  }

  generateQRCodes(event) {
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

  constructor(public viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {

  }

}
