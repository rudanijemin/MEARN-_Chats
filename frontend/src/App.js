import './App.css';
import{Route} from "react-router-dom"
import ChatPages from './pages/ChatPages';
import HomePages from './pages/HomePages';

function App() {
  return (
    <>
    <Route path="/" component={ChatPages} exact></Route>
    <Route path="/chats" component={HomePages}></Route>

    </>
  );
}

export default App;
