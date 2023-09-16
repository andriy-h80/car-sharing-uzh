import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
import Image from '../src/images/parking.jpg';

// import logo from './logo.svg';
import './App.css';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
     <Suspense fallback={<Image />}>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/catalog" element={<CatalogPage />} />
       <Route path="/favorite" element={<FavoritePage />} />
       </Routes>
      {/* <ToastContainer /> */}
    </Suspense>
  );
}

export default App;
