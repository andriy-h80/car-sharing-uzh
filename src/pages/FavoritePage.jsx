import React from 'react';
import Favorite from '../components/Favorite';

const FavoritePage = () => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '100vh', 
            backgroundColor: '#FFFFFF',
        }}>
            <Favorite />
        </div>   
    );
  };
  
  export default FavoritePage;
  