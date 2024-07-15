import "./nav.css"
import { Link ,useNavigate} from "react-router-dom";
import React, { useContext } from 'react';
import { UserContext } from './UserInfo';
const NavLittleLemon = () => {
  const { email, setEmail } = useContext(UserContext) || {};
  const navigate = useNavigate()

  const handleLogout = () => {
    setEmail(''); // setEmail ile email state'ini sıfırlıyoruz
    navigate("/Login"); // Logout sonrası login sayfasına yönlendirme
  };
  return (
      <div className="nav">
        <div className="logo">
          <div id="logo"></div>
        </div>
        <nav>
          <ul>
            <li><Link to="/" id="a">Home</Link></li>
            <li><Link to="/" id="a">About</Link></li>
            <li><Link to="/" id="a">Menu</Link></li>
            <li><Link to="/Booking" id="a">Reservations</Link></li>
            <li><Link to="/" id="a">Online Order</Link></li>
            {email ? (
              <li><span onClick={handleLogout}>Logout {email}</span></li>
            ) : (
              <li><Link to="/login" id="login">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    );
}

export default NavLittleLemon;