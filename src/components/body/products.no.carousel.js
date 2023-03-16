import laptop from '../../images/laptop-img.png'
import mobile from '../../images/mobile-img.png'
import computer from '../../images/computer-img.png'
import {useEffect, useState} from "react";
import axios from "axios";
export default function ProductsNoCarousel(){
    const [products, setProducts] = useState([])
    const ESHOP_API_PRODUCTS = process.env.REACT_APP_ESHOP_API_BASE_URL + "product-client"
    useEffect(() => {
        axios.get(ESHOP_API_PRODUCTS,{
            // headers: {
            // 'Access-Control-Allow-Origin':'*',
            // }
        }).then((data) => {
            console.log(data?.data);
            setProducts(data?.data);
        });
    }, []);
    return(
        <>
            <div className="fashion_section">
                <div className="container">
                    <h1 className="fashion_taital">Electronic</h1>
                    <div className="fashion_section_2">
                        <div className="row">
                            {products != null &&
                                products.map(product => <div className="col-lg-4 col-sm-4">
                                    <div className="box_main" key={product.Product.Id}>
                                        <h4 className="shirt_text">{product.Product.Name}</h4>
                                        <p className="price_text">Start Price  <span  style={{color:"#262626"}}>R {product.Product.SellPrice}</span></p>
                                        <div className="electronic_img"><img src={"data:image/png;base64,"+product.Media.image}/></div>
                                        <div className="btn_main">
                                            <div className="buy_bt"><a href="#">Buy Now</a></div>
                                            <div className="seemore_bt"><a href="#">See More</a></div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}