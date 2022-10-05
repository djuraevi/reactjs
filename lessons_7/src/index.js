import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store, persist} from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <PersistGate persistor={persist}>
    <Provider store={store}>
      <App />
    </Provider>
 </PersistGate>
);

