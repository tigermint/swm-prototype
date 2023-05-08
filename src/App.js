import { Routes, Route } from 'react-router-dom';

// Page Import
import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import SpacePage from './pages/SpacePage';
import MyPage from './pages/MyPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/space" element={<SpacePage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
