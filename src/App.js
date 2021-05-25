import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "styled-components";
import "./App.css";
import Header from './components/Header'
import Post from './components/Post'
import Media from './components/Media'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
