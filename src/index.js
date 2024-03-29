import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Invoices from './routes/invoices';
import Expenses from './routes/expenses';
import Contact from './routes/contact';
import SignupCard from './routes/signup';
import SigninCard from './routes/signin';
import HomePage from './routes/home';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <ColorModeScript />
            <App />
          </>
        }>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignupCard />} />
          <Route path="signin" element={<SigninCard />} />
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
