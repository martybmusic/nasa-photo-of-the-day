import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from './components/Header'
import Media from './components/Media'
import Content from './components/Content'

function App() {
  const [mediaType, setMediaType] = useState()
  const [nasaMedia, setNasaMedia] = useState()
  const [nasaTitle, setNasaTitle] = useState()
  const [nasaDate, setNasaDate] = useState()
  const [nasaInfo, setNasaInfo] = useState()

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=k9uiqyXabCjeeS16YCPHBE9RrLlKydWwA3f05vBY")
      .then(result => {
        setMediaType(result.data.media_type)
        setNasaMedia(result.data.hdurl)
        setNasaTitle(result.data.title)
        setNasaDate(result.data.date)
        setNasaInfo(result.data.explanation)
      })

      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <Media mediaType={mediaType} nasaMedia={nasaMedia} />
      <Content title={nasaTitle} date={nasaDate} info={nasaInfo} />
    </div>
  );
}

export default App;
