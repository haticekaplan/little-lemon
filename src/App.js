// App.js
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import NavLittleLemon from './NavLittleLemon';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import Booking from './Booking';
import CompletingBooking from './CompletingBooking';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/NavLittleLemon" element={<NavLittleLemon />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/CompletingBooking" element={<CompletingBooking />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;




