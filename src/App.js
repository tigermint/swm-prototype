import { Routes, Route } from 'react-router-dom';

// Page Import
import SpacePage from './pages/creator/SpacePage';
import ReservePage from './pages/participants/ReservePage';
import LandingPage from './pages/creator/LandingPage';
import SpaceCreatePage from './pages/creator/SpaceCreatePage';
import ErrorPage from './pages/ErrorPage';
import ReservationCheckPage from './pages/participants/ReservationCheckPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/"  element={<LandingPage />} />
        <Route path="/space" element={<SpacePage />} />
        <Route path="/space/:id" element={<ReservePage />} />
        <Route path="/create" element={<SpaceCreatePage />} />
        <Route path="/check" element={<ReservationCheckPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
