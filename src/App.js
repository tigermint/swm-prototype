import { Routes, Route } from 'react-router-dom';

// Page Import
import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import SpacePage from './pages/SpacePage';
import MyPage from './pages/MyPage';
import NamePage from './pages/NamePage';
import OrganizationPage from './pages/OrganizationPage';
import ErrorPage from './pages/ErrorPage';
import WelcomePage from './pages/WelcomePage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/"  element={<LandingPage />} />
        <Route path="/name"  element={<NamePage />} />
        <Route path="/organizaiton"  element={<OrganizationPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/space" element={<SpacePage />} />
        <Route path="/me" element={<MyPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
