import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './auth/Signup';
//import ExpressTest from './ExpressTest';
import Login from './auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/*Signup컴포넌트를 메인페이지로 설정 */}
        <Route path="/" element={<Signup />}/>
        {/*/login 패스경로로 Login 컴포넌트를 설정 */}
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
