import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  constructor(private vcref: ViewContainerRef) {}

  ngOnInit(): void {}

  async loadComponent() {
    this.vcref.clear();
    const { LazyComponent } = await import('../lazy/lazy.component');
    let lazy = this.vcref.createComponent(LazyComponent);
  }
}
