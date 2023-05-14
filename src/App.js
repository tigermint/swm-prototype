import { Routes, Route } from 'react-router-dom';

// Page Import
import SpacePage from './pages/creator/SpacePage';
import ReservePage from './pages/participants/ReservePage';
import LandingPage from './pages/creator/LandingPage';
import SpaceCreatePage from './pages/creator/SpaceCreatePage';
import MyPage from './pages/MyPage';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* creator */}
        <Route index element={<LandingPage />} />
        <Route path="/"  element={<LandingPage />} />
        <Route path="/space" element={<SpacePage />} />
        <Route path="/create" element={<SpaceCreatePage />} />
        {/* participants */}
        <Route path="/space/:id" element={<ReservePage />} />
        {/* mypage */}
        <Route path="/me" element={<MyPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
