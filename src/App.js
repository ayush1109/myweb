import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
const Store = ConfigureStore();

function App() {
  return (
    <Provider store = {Store}>
    <div className="App">
      <Main />
    </div>
    </Provider>
  );
}

export default App;
