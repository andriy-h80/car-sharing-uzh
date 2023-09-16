import React from 'react';
import Catalog from '../components/Catalog';

const CatalogPage = () => {  
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '100vh', 
            backgroundColor: '#FFFFFF',
        }}>
            <Catalog />
        </div>   
    );
  };
  
  export default CatalogPage;
  