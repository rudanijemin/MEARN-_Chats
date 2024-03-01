import './App.css';
import{Route} from "react-router-dom"
import ChatPages from './pages/ChatPages';
import HomePages from './pages/HomePages';

function App() {
  return (
    <>
    <div className='App'>
    <Route path="/" component={HomePages} exact></Route>
    <Route path="/chats" component={ChatPages}></Route>
    </div>

    </>
  );
}

export default App;
