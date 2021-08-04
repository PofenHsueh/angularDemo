import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typeList2= [
    {functId:'cboo1',funcName:"商品資訊",funcType:"menu",funcValue:null,subMenus:[
      {functId:'cboo1',funcName:"旅平險",funcType:"menu",funcValue:null,subMenus:[
      {functId:'cboo1',funcName:"我要投保",funcType:"function",funcValue:null,},
      {functId:'cboo1',funcName:"我要試算",funcType:"function",funcValue:null}]},
      {functId:'cboo1',funcName:"汽車險",funcType:"menu",funcValue:null,subMenus:[
      {functId:'cboo1',funcName:"我要投保",funcType:"function",funcValue:null},
      {functId:'cboo1',funcName:"我要試算",funcType:"function",funcValue:null}]
    },
      {functId:'cboo1',funcName:"機車險",funcType:"menu",funcValue:null,subMenus:[{functId:'cboo1',funcName:"我要投保",funcType:"function",funcValue:null},
      {functId:'cboo1',funcName:"我要試算",funcType:"function",funcValue:null}]},{functId:'cboo1',funcName:"意外傷害險",funcType:"menu",funcValue:null,subMenus:[
      {functId:'cboo1',funcName:"我要投保",funcType:"function",funcValue:null},{functId:'cboo1',funcName:"我要試算",funcType:"function",funcValue:null}]},{functId:'cboo1',funcName:"年金險",funcType:"menu",funcValue:null,subMenus:[{functId:'cboo1',funcName:"我要投保",funcType:"function",funcValue:null},
      {functId:'cboo1',funcName:"我要試算",funcType:"function",funcValue:null
      }]},
      {functId:'cboo1',funcName:"寵物險",funcType:"menu",funcValue:null,subMenus:[{functId:'cboo1',funcName:"我要投保",funcType:"function",funcValue:null},
      {functId:'cboo1',funcName:"我要試算",funcType:"function",funcValue:null}]},
      {functId:'cboo1',funcName:"住火險",funcType:"menu",funcValue:null,subMenus:[{functId:'cboo1',funcName:"我要投保",funcType:"function",funcValue:null},
      {functId:'cboo1',funcName:"我要試算",funcType:"function",funcValue:null}]
    },
      {functId:'cboo1',funcName:"壽險",funcType:"menu",funcValue:null,subMenus:[{functId:'cboo1',funcName:"我要投保",funcType:"function",funcValue:null},
      {functId:'cboo1',funcName:"我要試算",funcType:"function",funcValue:null}]},{functId:'cboo1',funcName:"其他",funcType:"menu",funcValue:null,subMenus:[
      {functId:'cboo1',funcName:"疫苗險",funcType:"function",funcValue:null},
      {functId:'cboo1',funcName:"手機險",funcType:"function",funcValue:null}]}]},
      {functId:'cboo1',funcName:"限時優惠",funcType:"function",funcValue:null},
      {functId:'cboo1',funcName:"會員專區",funcType:"function",funcValue:null,subMenus:[]},
      {functId:'cboo1',funcName:"懶人包",funcType:"function",funcValue:null,subMenus:[]},
      {functId:'cboo1',funcName:"常見Q&A",funcType:"function",funcValue:null,subMenus:[]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
