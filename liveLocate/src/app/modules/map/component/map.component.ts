import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj.js';
// Styles to change map type
import {Style, Fill, Stroke} from 'ol/style';
// imports for Geolocation icon
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import {circular} from 'ol/geom/Polygon';
import Point from 'ol/geom/Point';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map;
  constructor() { }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap(){
    
    // new map
    this.map = new Map ({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        })
        ],
        view: new View({
          center: fromLonLat([13.689167,47.394167]),
          zoom: 9
        })
    
      
    })
  }
}