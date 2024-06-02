// Component ProductList
import oneImage from './perfumy-main/images/one.jpg';
import twoImage from './perfumy-main/images/two.jpg';
import threeImage from './perfumy-main/images/three.jpg';
function ProductList() {
    return (
        <div className="products">
            <div className='box'>
                <img src={oneImage} alt="product one" />
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
            </div>
            <div className='box'>
                <img src={threeImage} alt="product three" />
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
            </div>
            <div className="box">
                <img src={twoImage} alt="product two" />
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
        </div>
    )
}

export default ProductList