import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
    .mapa-container {
      height: 100%;
      width: 100%;
    }

    .row {
      background-color: white;
      border.radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
    }
  `
  ]
})

export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;

  constructor() { 
  
   }

  ngAfterViewInit(): void {

    console.log('afterViewInit', this.divMapa);

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -0.355643341466306, 39.47783918180663 ],
      zoom: this.zoomLevel,
    });
  }

  zoomOut() {
    this.mapa.zoomOut();

    this.zoomLevel = this.mapa.getZoom();
  }

  zoomIn() {
    this.mapa.zoomIn();
    
    this.zoomLevel = this.mapa.getZoom();
  }



}
