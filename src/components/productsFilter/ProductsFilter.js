import React, { useEffect, useState } from 'react'
import RangeSlider from '../rangeSlider/RangeSlider';
import Rating from '../rating/Rating';
import './index.scss'

export default function ProductsFilter({products, setFilterdProducts, activeProductFilter, theme}) {
    const [brands, setBrands] = useState(new Set());
    const [brandsArr, setBrandsArr] = useState([]);

    const [categories, setCategories] = useState(new Set());
    const [categoriesArr, setCategoriesArr] = useState([]);


    // hanle array of unique brands and categories from array
    useEffect(() => {
        products.map((pro) => setBrands(brands.add(pro.brand)));
        setBrandsArr([...brands]);

        products.map((pro) => setCategories(categories.add(pro.category)));
        setCategoriesArr([...categories]);
    }, [products]);


        // handle filter by price range
    function handleRangePrice(e){
        // e.preventDefault()
        switch (e.target.value) {
            case "all":
                setFilterdProducts(products)
                break;
            case "<=$10":
                setFilterdProducts(products.filter(product => product.price <= 10))
                break;
            case "$10-$100":
                setFilterdProducts(products.filter(product => product.price > 10 && product.price <= 100))
                break;
            case "$100-$500":
                setFilterdProducts(products.filter(product => product.price > 100 && product.price <= 500))
                break;
            case ">=500$":
                setFilterdProducts(products.filter(product => product.price > 500))
                break;
            default:
                break;
        }
    }

    // handle filter by brand
    function handleBrand(e){
        if(e.target.value == "all"){
            setFilterdProducts(products)
        }else{
            setFilterdProducts(products.filter(product => product.brand == e.target.value))
        }
    }

    // handle filter by category
    function handleCategory(e){
        if(e.target.value == "all"){
            setFilterdProducts(products)
        }else{
        setFilterdProducts(products.filter(product => product.category == e.target.value))
        }
    }

    // handle filter by rating
    function handleRating(rate){
        setFilterdProducts(products.filter(product => product.rating >= rate))
    }

    

    return (
        <div className={`products-filter ${theme}-theme ${activeProductFilter} `}>
            <h6 className='filter-title'>Filters</h6>
            <div className='filter-options'>
                <form onChange={(e) => handleRangePrice(e)}>
                    <label htmlFor="multi-range">
                        <h6>Multi Range</h6>
                    </label>
                    <label className="form-control">
                        <input type="radio" id="multi-range" name="range" value="all" />
                        All
                    </label> 
                    <label className="form-control">
                        <input type="radio" id="multi-range" name="range" value="<=$10" />
                        {`<=$10`}
                    </label> 
                    <label className="form-control">
                        <input type="radio" id="multi-range" name="range" value="$10-$100" />
                        $10-$100
                    </label> 
                    <label className="form-control">
                        <input type="radio" id="multi-range" name="range" value="$100-$500" />
                        $100-$500
                    </label> 
                    <label className="form-control">
                        <input type="radio" id="multi-range" name="range" value=">=500$" />
                        {`>=500$`}
                    </label> 
                </form>
                <form className='slider-range'>
                    <RangeSlider products={products} theme={theme} setFilterdProducts={setFilterdProducts} />
                </form>
                <form onChange={(e) => handleCategory(e)}>
                    <label>
                        <h6>Categories</h6>
                    </label>
                    <label class="form-control">
                        <input type="radio" id="category" name="range" value="all" />
                        all
                    </label>
                    {categoriesArr.map(category => (
                        <label className="form-control" key={category}>
                            <input type="radio" id="category" name="range" value={category} />
                            {category}
                        </label>
                    ))}
                </form>
                <form onChange={(e) => handleBrand(e)}>
                    <label>
                        <h6>Brands</h6>
                    </label>
                    <label class="form-control">
                        <input type="radio" id="barnd" name="range" value="all" />
                        all
                    </label>
                    {brandsArr.map(brand => (
                        <label className="form-control" key={brand}>
                            <input type="radio" id="brand" name="range" value={brand} />
                            {brand}
                        </label>
                    ))}
                </form>
                <form>
                    <label>
                        <h6>Rating</h6>
                    </label>
                    {Array(5).fill("").map((_, i) => (
                        <div className='row' key={i}>
                            <div className='products-rating'  onClick={()=> handleRating(Array(5).fill("").length - i)}>
                                <Rating num={Array(5).fill("").length - i} />
                                <span>
                                    & up
                                </span>
                            </div>
                            <span className='products-amount'>{products.filter(product => product.rating >= Array(5).fill("").length - i).length}</span>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    )
}
