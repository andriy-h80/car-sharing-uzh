import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
import Image from '../src/images/parking.jpg';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage'));

const ImageFallback = () => <img src={Image} alt="car on parking" />;

function App() {
  return (
 
     <Suspense fallback={<ImageFallback />}>
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
