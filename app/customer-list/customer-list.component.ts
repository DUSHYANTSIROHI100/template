import { Component,OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{

  constructor() { } 
  ngOnInit(): void {
    
  }

  selectedCustomer: any;

  customers:Customer[]=[
  {customerNo:1,name:'Mark Voutght',address:'opjj',city:'London',country:'UK'},
  {customerNo:2,name:'Mafrk Voufght',address:'hfgf',city:'Lonvbdon',country:'UtK'},
  {customerNo:3,name:'Mafrk Vouhght',address:'gfghf',city:'Londbton',country:'UtK'},
  {customerNo:4,name:'Masrk Voughts',address:'hgfhgf',city:'Londbton',country:'UtbK'}
  ]
}
