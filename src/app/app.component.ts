import { Component, ComponentFactoryResolver, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  @ViewChild('root', { static: true }) root;
  constructor(private renderer: Renderer2) { };

  drop(ev): void {
    console.log('element dropped');
    // console.log(ev);
    // const div = this.renderer.createElement('div');
    // const input = this.renderer.createElement('input');
    // this.renderer.appendChild(div, input);
    // this.renderer.appendChild(this.root.nativeElement, div);
    // this.renderer.setStyle(this.root.nativeElement, 'position', 'relative');
    // this.renderer.setStyle(this.root.nativeElement, 'left', ev.distance.x);
    // this.renderer.setStyle(this.root.nativeElement, 'top', ev.distance.y);

  }
}
