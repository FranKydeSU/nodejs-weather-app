const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5dd70e1d9a4b6cf2271daf1e63205f69&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to Connect the weather app!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.current)
            callback(undefined,
                body.current.weather_descriptions[0] + ", It's is currently " + body.current.temperature + " degrees out. It's feelslike " + body.current.feelslike + " degrees. The humidity is " + body.current.humidity + " %"
            )
        }

    })
}

module.exports = forecast;