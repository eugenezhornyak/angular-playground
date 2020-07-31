import { Component, OnInit, Input, ViewEncapsulation, OnChanges,
  SimpleChange, SimpleChanges, DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy,
  ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
                                               AfterContentChecked, AfterViewInit, AfterViewChecked
                                               , OnDestroy {
  @Input('serverElement')
  element: {type: string, name: string, content: string};
  @Input()
  name: string;

  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log(this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
    console.log(this.header.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log(this.contentParagraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    // console.log(this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }
}
