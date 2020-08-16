import React from 'react'
import image from "../../image/Exports/PNG/FaradayHomePicmin.png"
const Section = () => {
    return (
        <div className="checkout-page">
            <div className="app-header">
                <h1>Shopping Cart</h1>
            </div>
            <div className="shopping-cart grid-8">
                <div>
                </div>
                <div>
                </div>
                <div>product</div>
                <div>Part#</div>
                <div>Availability</div>
                <div>Quantity#</div>
                <div>Unit Price</div>
                <div>Total</div>
            </div>
            <div className="shopping-item grid-8">
                <div>1</div>
                <div >
                    <img src={image} alt="cart_img" style={{ width: "100%" }} />
                </div>
                <div>
                    Product Title
                </div>
                <div>1</div>
                <div>yes</div>
                <div>1</div>
                <div>$150</div>
                <div>$150</div>
            </div>
            <div className="checkout-buttons grid-2">
                <div>
                    <button className="button"> &lt; Continue Shopping</button>
                </div>
                <div style={{ textAlign: "-webkit-right" }}>
                    <button className="button">Buy Now &gt; </button>
                    <div style={{ paddingTop: "20px" }}>
                        <button className="button" >Generate Quote &gt; </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Section