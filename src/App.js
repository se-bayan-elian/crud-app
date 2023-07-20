import  Router  from './router/Router';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router></Router>
    </div>
  );
}

export default App;
