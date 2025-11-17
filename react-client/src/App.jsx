import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import ProductsListComponent from './components/ProductListComponent';
import ProductDetailsComponent from './components/ProductDetailsComponent';
import AddProductComponent from './components/AddProductComponent';
import LoginPage from './components/LoginComponent';
import { Link } from 'react-router-dom';
import ProtectedLayout from './components/ProtectedLayout.jsx';
import ProfilePage from './components/ProfilePage.jsx';

function App() {

  return (

    <Router>
      <div className="container">
        <nav>
          <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<ProductsListComponent />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/products" element={<ProductsListComponent />} />
            <Route path="/products/:id" element={<ProductDetailsComponent />} />
            <Route path="/add-product" element={<AddProductComponent />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
