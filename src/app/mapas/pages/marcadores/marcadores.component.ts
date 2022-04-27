import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container {
      height: 100%;
      width: 100%;
    }
  `]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [ -0.355643341466306, 39.47783918180663 ];

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    // Para utilizar marcadores personalizados.
    //const markerHtml: HTMLElement = document.createElement('div');
    //markerHtml.innerHTML = 'Hola Mundo';

    const marker = new mapboxgl.Marker(
      //Para utilizar marcadores personalizados
      //{ element: markerHtml }
    )
      .setLngLat( this.center )
      .addTo( this.mapa );
    
  }

}
