import './App.css';
import ThoughtBody from './components/ThoughtBody';
import RegisterForm from './components/login_components/RegisterForm';
import LoginForm from './components/login_components/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
        </Routes>
        <ThoughtBody/>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
