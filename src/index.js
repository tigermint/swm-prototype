import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { GlobalStyles } from './commonStyles';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const mantineStyle = {
  fontFamily: 'GangwonEdu_OTFBoldA, sans-serif'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <GlobalStyles /> */}
      <MantineProvider theme={mantineStyle}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </MantineProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
