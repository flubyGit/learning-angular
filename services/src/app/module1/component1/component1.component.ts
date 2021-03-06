import { Component, OnInit } from '@angular/core';
import { Service2 } from 'src/app/service2.service';
import { Service1 } from '../service1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
  // providers: [Service1] - Injeção de dependencia
})
export class Component1Component implements OnInit {
  num = 0
  text = ''

  constructor(
    private myService1: Service1,
    private myService2: Service2
  ) { }

  ngOnInit(): void {
    this.num = this.myService1.num
    this.text = this.myService2.text
  }
}
