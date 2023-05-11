import { Routes, Route } from 'react-router-dom';

// Page Import
import SpacePage from './pages/SpacePage';
import LandingPage from './pages/landing/LandingPage';
import SpaceCreatePage from './pages/SpaceCreatePage';
import MyPage from './pages/MyPage';
import NamePage from './pages/landing/NamePage';
import OrganizationPage from './pages/landing/OrganizationPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/"  element={<LandingPage />} />
        <Route path="/name"  element={<NamePage />} />
        <Route path="/organization"  element={<OrganizationPage />} />
        <Route path="/space" element={<SpacePage />} />
        <Route path="/create" element={<SpaceCreatePage />} />
        <Route path="/me" element={<MyPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
