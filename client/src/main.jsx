import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <UIContextProvider >
        <App />
      </UIContextProvider>
  
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
