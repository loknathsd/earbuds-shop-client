import React from 'react';

const OfferBanner = () => {
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const d = new Date();
    let from = month[d.getMonth()];  
    let to = month[d.getMonth()+1];  
    return (
        <div>
            <div>
                <div>
                    <p>20% off</p>
                    <h1>FINE <br /> SMILE</h1>
                    <p>20 {from} to 7 {to}</p>

                </div>
            </div>
            
        </div>
    );
};

export default OfferBanner;