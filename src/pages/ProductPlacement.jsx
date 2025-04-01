import "../styles/pages/product-placement.css";
import ProductCard from "../components/templates/ProductCard.jsx";

const ProductPlacement = () => {
    return (
        <>
            <h1>Каталог</h1>
            <div className='prod-wrapper'>
                <div id='products-list' className='prod-container'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
                <div id='card' className='card-container'></div>
            </div>
        </>
    );
}

export default ProductPlacement