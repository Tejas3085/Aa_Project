import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ModifierFlags } from 'typescript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
subm(){
  
alert("submited successfully");
}
  constructor() { }

  ngOnInit(): void {
  }

}
