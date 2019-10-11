import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {

  //使用装饰器 与 事件发射器
  @Input() product: any;
  @Output() notify = new EventEmitter();

  constructor() { }
  
  ngOnInit() {
  }

}
