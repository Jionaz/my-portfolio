import React, { useState } from "react"

const WeatherComponent = () => {
  const [zipcode, setZipcode] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    setZipcode(e.target.value)
  }

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.hgbrasil.com/weather?format=json-cors&key=190f1994&city_name=${zipcode}`
      )
      const data = await response.json()
      if (data.results) {
        setWeatherData(data.results)
        setError(null)
      } else {
        setError(data.error)
        setWeatherData(null)
      }
    } catch (error) {
      setError("Error fetching weather data.")
      setWeatherData(null)
    }
  }

  return (
    <div className="apiApp">
      <h1>Clima check</h1>
      <label htmlFor="cityName">Insira o nome da cidade: </label>
      <input type="text" value={zipcode} onChange={handleInputChange} name="cityName" placeholder="Cidade"/>
      <button onClick={fetchWeatherData}>Ver clima</button>
      {error && <p>{error}</p>}
      {weatherData && (
        <div className="cardWheater">
          <h2>Clima em: {weatherData.city_name}</h2>
          <p>Temperatura: {weatherData.temp}°C</p>
          <p>Descrição: {weatherData.description}</p>
          <p>Umidade relativa: {weatherData.humidity}%</p>
        </div>
      )}
    </div>
  )
}

export default WeatherComponent;
