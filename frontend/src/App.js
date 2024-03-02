import './App.css';
import{Route} from "react-router-dom"
import ChatPages from './pages/ChatPages';
import HomePages from './pages/HomePages';

function App() {
  return (
    <>
    <div className='App'>
    <h1>hello</h1>
    <Route path="/" component={HomePages} ></Route>
    <Route path="/chats" component={ChatPages}></Route>
    </div>

    </>
  );
}

export default App;
