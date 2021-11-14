const request = require('request')

//Geocode | get Latitude and Longitude
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZnJhbmt5ZGVzdSIsImEiOiJja3Z2YjMwNDUxNDU0MnVvMnNwY2J3NWR4In0.APM2waSiuPDYcpERjWq8ig&limit=1'

    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to Connect the location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location, Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode;