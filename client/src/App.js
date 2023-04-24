import { Route, Routes } from 'react-router-dom';
// Pages
import Home from './pages/home/Home';
import CalculatorPage from './pages/calculator/CalculatorPage';
import Faq from './pages/faq/Faq';
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
      <Route path='/' element={<Home />} index />
      <Route path='/calculator' element={<CalculatorPage />} />
      <Route path='/simulator' element={<SimulatorPage />} />
      <Route path='/lessons' element={<Lessons />} />

      <Route path='/forum' element={<Forum />} />
      <Route path='/faq' element={<Faq />} />
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
