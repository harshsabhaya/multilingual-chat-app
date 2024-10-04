import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Chatpage from './Pages/Chatpage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={HomePage} exact></Route>
      <Route path='/chats' component={Chatpage}></Route>
      {/* <Route path = '/'></Route> */}
    </div>
  );
}

export default App;
