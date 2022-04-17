import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {
  Detail,
  Favorite,
  Cart,
  Profile,
  Register,
  LoginPage,
  Home
} from './pages/index';
import PrivateRoute from './routers/PrivateRoute';
import PublicRoute from './routers/PublicRoute';

function App() {
  return (
     <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Public Routes */}
            <Route element={<PublicRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Route>

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
