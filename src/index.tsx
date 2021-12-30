import React from "react";
import ReactDOM from "react-dom";
import { MapsApp } from "./MapsApp";
/* eslint import/no-webpack-loader-syntax: off*/
//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJ0cmFtb3Nhc3R1ZGlsbG8iLCJhIjoiY2ttNWNlZWw0MGQ2azJ2cHVyMG41Y2lqayJ9.lx3XTuCsrCzbdYtI2FQXbw';

if(!navigator.geolocation){
  alert('Tu navegador no tiene opcion de Geolocation');
  throw new Error('Tu navegador no tiene opcion de Geolocation')
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById("root")
);
