import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoicm9iZXJ0cmFtb3Nhc3R1ZGlsbG8iLCJhIjoiY2ttNWNlZWw0MGQ2azJ2cHVyMG41Y2lqayJ9.lx3XTuCsrCzbdYtI2FQXbw'
    }
})

export default directionsApi;