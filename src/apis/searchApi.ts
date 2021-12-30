import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoicm9iZXJ0cmFtb3Nhc3R1ZGlsbG8iLCJhIjoiY2ttNWNlZWw0MGQ2azJ2cHVyMG41Y2lqayJ9.lx3XTuCsrCzbdYtI2FQXbw'
    }
})

export default searchApi;