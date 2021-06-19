import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {MarkerContentModel} from '../../models/markerContent.model';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map: L.Map;
  private centroid: L.LatLngExpression = [33.9889742005364, -6.873794505439361]; //


  listOfMarkers = [{
   langitud: 33.90068216980068,
  latitud: -6.80576861115008,
   nivRemp : 35,
    title: '1'
  },
{
  langitud: 33.99068216980068,
    latitud: - 6.87576861115008,
    nivRemp: 30,
    title: '2'
}];



  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 18
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 24,
      minZoom: 16,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    /*const jittery = Array(10).fill(this.centroid).map(
        x => [x[0] + (Math.random() - .5) / 50, x[1] + (Math.random() - .5) / 50 ]
      ).map(
        x => L.marker(x as L.LatLngExpression)
      ).forEach(
        x => x.addTo(this.map)
      );*/

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listOfMarkers.length; i++ ) {
      // tslint:disable-next-line:prefer-const
      let x = L.marker([this.listOfMarkers[i].latitud, this.listOfMarkers[i].langitud]);
      x.addTo(this.map);
    }

    tiles.addTo(this.map);

  }

constructor(){ }

ngOnInit(): void {
    this.initMap();
  }

}
