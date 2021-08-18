import { transition } from '@angular/animations';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { transform } from 'typescript';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 isDisplay=false;
 toggle(){
   this.isDisplay=!this.isDisplay;
  
 }

  
  constructor() { }

  ngOnInit(): void {
  }
 

}

