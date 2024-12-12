import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import WorkshopDetail from "./pages/WorkshopDetail";
import WorkshopPage from "./pages/WorkshopPage";
import ShoppingCart from './pages/ShoppingCart';

import './App.css';
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Profile from "./pages/Profile";
import ProductAdmin from "./pages/ProductAdmin";
import Signup from "./pages/Signup";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header /> {/* You can add the Header component here if you want it to be on all pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/productadmin" element={<ProductAdmin/>} />
          <Route path="/workshop/:id" element={<WorkshopDetail/>} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path='/userprofile' element={<UserProfile />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path="/workshops" element={<WorkshopPage/>}></Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

