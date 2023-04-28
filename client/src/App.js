import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import CalculatorPage from './pages/calculator/CalculatorPage';
import Lessons from './pages/lessons/Lessons';
import Forum from './pages/forum/Forum';
import Links from './pages/links/Links';
import Account from './pages/account/Account';
import Post from './pages/post/Post';
// Utils
import { AuthenticateUser } from './utils/AuthenticateUser';
import SimulatorPage from './pages/simulator/SimulatorPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} index />
      <Route path='/calculator' element={<CalculatorPage />} />
      <Route path='/simulator' element={<SimulatorPage />} />
      <Route path='/lessons' element={<Lessons />} />

      <Route path='/forum' element={<Forum />} />
      <Route path='/links' element={<Links />} />

      <Route path='/post' element={<Post />} />
      <Route path='/account' element={<Account />} />
      {/* Secure routes */}
      <Route
        path='/account'
        element={
          <AuthenticateUser>
            <Account />
          </AuthenticateUser>
        }
      />
    </Routes>
  );
}

export default App;
