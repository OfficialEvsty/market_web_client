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
                <div id='card' className='card-container'>
                    <span>Корзина</span>
                    <div className='empty-card-container'>
                        <img src='/assets/svg/Bag.svg' alt='card' />
                        <span className='card-info'>
                            <h3>Пустая корзина</h3>
                            <p>Быстрее наполните её товарами</p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPlacement