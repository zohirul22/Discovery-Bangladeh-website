import React from 'react';
import useProducts from '../../Hooks/useProducts';
import './Home.css'

const Home = () => {
    const [products ,setproducts] = useProducts();
    return (
        <div>
            <div className="main-part">
                <div className="text-info">
                    <h1>MY BEST SHOWES</h1>
                 <p>Bata Shoe Company is the market leader in the footwear industry since its operation in Bangladesh. The name Bata achieved such a position in the customers’ mind that whenever they heard the name of Bata, a footwear with high quality comes into their mind. Bata has been serving its customers with wide assortments of products for about five decades and doing it successfully.   <button>Live Demo</button> </p>
               
                </div>
                <div >
                    <img className="img-inf"  src="../img/img1.png" alt="" />
                </div>
            </div>


            <div className='all-review'>
     {
         products.slice(0,3).map(pd => <div className='products-details' >
             <img className='img-info' src={pd.img} alt="" />
             <h1>Id:{pd.id}</h1>
             <h2>Name:{pd.name}</h2>
             <h4> Ratings:{pd.Ratings}</h4>
         </div>)
     }  
   
        </div>
        <button>See All </button>
        </div>
    );
};

export default Home;