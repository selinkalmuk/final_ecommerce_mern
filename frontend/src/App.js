import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import WorkshopDetail from "./pages/WorkshopDetail";
import WorkshopPage from "./pages/WorkshopPage";


import './App.css';
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header /> {/* You can add the Header component here if you want it to be on all pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/productdetail" element={<ProductDetail/>} />
          <Route path="/workshopdetail" element={<WorkshopDetail/>} />
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path='/userprofile' element={<UserProfile />}></Route>
          <Route path="/workshops" element={<WorkshopPage/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

