import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import ResetCss from '../assets/resetCss.js';
import GlobalStyle from '../assets/globalStyles.js';

import UserScreen from "../pages/userScreen.jsx";

function App() {

  return (
      <>
      <ResetCss />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserScreen />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;