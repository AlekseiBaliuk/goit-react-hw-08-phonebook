// import React from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { ThemeProvider } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { App } from 'components/App/App';
// import { theme } from './constants';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ModalState } from 'context/ModalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <ThemeProvider theme={theme}> */}
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ModalState>
            <App />
          </ModalState>
        </BrowserRouter>
        {/* </ThemeProvider> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
