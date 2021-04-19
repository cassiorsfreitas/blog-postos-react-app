import React, { useState, useEffect } from 'react'

import './style.css'

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Porto&appid=6543beffd5dbcaba65071c8a3f3991f4'


function CardStatus() {

    const [temp, setTemp] = useState(0)
    const [cityName, setCityName] = useState("Loading...")
    const [countryName, setCountryName] = useState("")

    useEffect(() => {
        async function fetchData() {
            const responseWeather = await fetch(url)
            const responseWeatherJson = await responseWeather.json()
            setCityName(responseWeatherJson.name)
            setCountryName(responseWeatherJson.sys.country)
            setTemp(Math.round(responseWeatherJson.main.temp - 273.15))
        }

        fetchData()
    }, [])
    
    
    // const countryName = weather.value.base

    return (
        <div className="cardStatus">
            <div>
                <div className="temperature">
                    <div className="number">{temp}</div>
                    <div className="celsius">C</div>
                </div>

                <div className="extra">
                    <div className="localization">{cityName}, {countryName}</div>
                    <div className="time">12:42</div>
                    <div className="date">MON APR 19 2021</div>
                </div>
            </div>
        </div>
    )
}

export default CardStatus

