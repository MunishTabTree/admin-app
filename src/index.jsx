import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthLayout, MainLayout, HomePage, Login, Signup, Forgot } from './pages'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { store, persistor } from './utils/store'

// main root or app render
const root = createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
