import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { Header } from './componentes/Header';
import { Home } from './componentes/Home';
import { About } from './componentes/About';
import { Dashboard } from './componentes/Dashboard';

export const AppRouter = () => {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/dashboard" element={ <Dashboard /> } />
          </Routes>
      </BrowserRouter>
  );
};