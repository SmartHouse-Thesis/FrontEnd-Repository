import { SignIn } from './pages/SignIn';
import './index.css';
import '../public/css/index.css';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { Logout } from './pages/Logout';
import { Admin } from './layout/Admin';
import { Layout } from './pages/Layout';
import { Sidebar } from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { ConstructionPage } from './pages/ConstructionPage';
import { DevicePage } from './pages/DevicePage';
import { PromotionPage } from './pages/PromotionPage';
import { AssignStaff } from './pages/AssignStaff';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/reset-password' element={<ForgotPassword />} />
        <Route path='/log-out' element={<Logout />} />
        <Route path='/' element={<SignIn />} />
        <Route element={<Admin />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/construction' element={<ConstructionPage />} />
          <Route path='/device-page' element={<DevicePage />} />
          <Route path='/promotion' element={<PromotionPage />} />
          <Route path='/assign-staff' element={<AssignStaff />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
