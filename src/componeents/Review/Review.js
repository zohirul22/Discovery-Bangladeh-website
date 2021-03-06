import React from 'react';
import useProducts from '../../Hooks/useProducts';
import './Review.css'


const Review = () => {
    const [products ,setproducts] = useProducts();
    
    return (
        <div className='all-review'>
     {
        products.slice(0,6).map(pd => <div className='products-details' >
              <h2>Name:{pd.name}</h2>
            <h3>Review:{pd.Review}</h3>
             <h4> Ratings:{pd.Ratings}</h4>
         </div>)
     }   
        </div>
    );
};

export default Review;