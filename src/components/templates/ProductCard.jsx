import "../../styles/components/templates/product-card.css"

const ProductCard = () => {
    return (
        <div className='substrate'>
            <div className='frame'>
                <img src='/assets/png/Photo.png' alt='продукт'/>
            </div>
            <div className='product-info'>
                <div className='price-wrapper'>
                    <div className='price'>350 ₽</div>
                    <div className='name'>Творог из вкусного молока аафывфывфвыф</div>
                </div>
                <div className='weight'>200 г</div>
            </div>
        </div>
    )
}

export default ProductCard;