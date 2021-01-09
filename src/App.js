
import './App.css';
import Header from './header/header';
import Footer from './footer/footer';
import Main from './main/main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
      <Main></Main>
      <Footer> </Footer>
      </Router>

    </div>
  );
}

export default App;
