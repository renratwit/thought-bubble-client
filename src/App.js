import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import ThoughtBody from './components/ThoughtBody';
import LoginForm from './components/login_components/LoginForm';



const App = () => {

  return (
    <div>
      <LoginForm/>
      <ThoughtBody/>
    </div>
    
  );
}

export default App;
