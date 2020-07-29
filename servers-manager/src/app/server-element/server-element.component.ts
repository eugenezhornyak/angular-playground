import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input('serverElement')
  element:{type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
