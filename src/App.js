import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Home/>
      </Provider>
    </div>
  );
}

export default App;
