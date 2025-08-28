import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/Home/HomePage";
import RegistrationForm from "./components/User/Register";
import LoginForm from "./components/User/Login";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import { useSelector } from "react-redux";
import AddCategory from "./components/Category/AddCategory";
import CategoriesList from "./components/Category/CategoriesList";
import UpdateCategory from "./components/Category/UpdateCategory";
import TransactionForm from "./components/Transaction/TransactionFrom";
import Dashboard from "./components/User/Dashboard";
import Profile from "./components/User/Profile";
import { PrivateRoute } from "./components/Private/PrivateRoute";

function App() {

  const user = useSelector((state) => state.auth.user);

  return (
    <BrowserRouter>
      {user ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route element={<PrivateRoute />}>
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/update-category/:id" element={<UpdateCategory />} />
          <Route path="/add-transaction" element={<TransactionForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
