import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public picUrl="";

  public list:any[] = [{
      "title":"123"
  },{
      "title":"456"
  },{
      "title":"789"
  }]

  public flag:boolean=false;



  constructor() { }

  ngOnInit() {
  }

}
