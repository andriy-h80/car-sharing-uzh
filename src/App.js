import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage'));

function App() {
  return (
 
    <Suspense fallback={<Loader />}>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/catalog" element={<CatalogPage />} />
       <Route path="/favorite" element={<FavoritePage />} />
       <Route path="*" element={<Navigate to="/" />} />
       </Routes>
    </Suspense>
  );
}

export default App;
