import logo from './logo.svg';
import './App.css';
import NewsComponent from './Component/NewsComponent';
import {  Route, Routes,Link,Navigate } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Body from './Component/Body';
import Footer from './Component/Footer';
import Headroom from 'react-headroom';
import Signuplogin from './Component/Signuplogin';
import Home from './Component/Home';
import { AuthContext } from './AuthContext';
import AboutUs from './Component/AboutUs';
function App() {
  return (<>
    <Headroom>
    <Navbar></Navbar>
    </Headroom>
    {/* <Home></Home> commited on github */}

    <Routes>
   <Route path="/signup" element={<Signuplogin />} />
   <Route path="/" element={<Home />} />
   <Route path="/about-us" element={<AboutUs />} />
   <Route path="/protected" element={<ProtectedRoute />} />

   </Routes>
    
  
   
</>
  );
}
const ProtectedRoute = () => {
  return (
    <AuthContext.Consumer>
      {({ auth }) => (auth ? <ProtectedComponent /> : <Navigate to="/login-signup" />)}
    </AuthContext.Consumer>
  );
};
const ProtectedComponent = () => {
  return <h3>This is a protected route</h3>;
};


export default App;
