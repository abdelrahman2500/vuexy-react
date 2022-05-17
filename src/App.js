import './App.scss';
import Header from './components/header/Header';
import PageTitle from './components/pageTitle/PageTitle';
import ProductsFilter from './components/productsFilter/ProductsFilter';
import SearchFilter from './components/searchFilter/SearchFilter';
import Sidebar from './components/sidebar/Sidebar';
import Products from './pages/products/Products';
import data from './data.json'
import { useState, useEffect } from 'react';
import Footer from './components/footer/Footer';

import {AiOutlineArrowUp} from 'react-icons/ai'

function App() {
    // get products from json file
    const [products, setProducts] = useState(data.products)
    const [filterdProducts, setFilterdProducts] = useState(data.products)

    // this is for sort products by price
    const [feature, setFeature] = useState("Featured")

    // this is for toggle sidebar 
    const [activeSideBar, setActiveSideBar] = useState("")

    // this is for toggle products filters sidebar
    const [activeProductFilter, setActiveProductFilter] = useState("") 

    // this for how products to show
    const [showMode, setShowMode] = useState("menu-mode") 

    // toggle theme
    const [theme, setTheme] = useState("dark")

    // toogle go to top btn
    const [showTopBtn, setShowTopBtn] = useState(false);


    // handle sort products by price
    function handleByPrice(e){
        let sort = e.target.innerText ;
        setFeature(sort)
        setFilterdProducts(filterdProducts.sort((a,b) => (
            sort === 'Lowest' ? ((a.price > b.price) ? 1 : -1) 
            : sort === 'Highest' ?  ((a.price < b.price) ? 1 : -1) 
            : ( a.id < b.id ? 1 : -1 )
        )))
    }

    // toggle sidebar 
    function showSidebar(){
        setActiveSideBar(activeSideBar == "active" ? "": "active")
    }

    // toggle products filters sidebar 
    function showProductFilter(){
        setActiveProductFilter(activeProductFilter == "active" ? "": "active")
    }


    useEffect(()=> {
        goToTop()
    },[filterdProducts])

    // handle go to top button
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    function goToTop() {
        console.log(window.scrollY);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <div className={`App ${theme}-theme`}>
        {/* handle layout of the page */}
            <Sidebar activeSideBar={activeSideBar} theme={theme} />
            <div className={`overlay-for-sidebar ${activeSideBar}`}  onClick={()=> showSidebar()}></div>
            <div className='content'>
                <Header showSidebar={showSidebar} theme={theme} setTheme={setTheme} />
                <div className='page-content'>
                    <PageTitle theme={theme} />
                    <div className='products-and-filters'>
                        <div className={`overlay-filter ${activeProductFilter}`}  onClick={()=> showProductFilter()}></div>
                        <ProductsFilter products={products} filterdProducts={filterdProducts} setFilterdProducts={setFilterdProducts} activeProductFilter={activeProductFilter} showProductFilter={showProductFilter} theme={theme} />
                        <div className='products-and-search'>
                            <SearchFilter products={products} filterdProducts={filterdProducts} setFilterdProducts={setFilterdProducts} feature={feature} handleByPrice={handleByPrice} showProductFilter={showProductFilter} showMode={showMode} setShowMode={setShowMode} theme={theme} />
                            <Products filterdProducts={filterdProducts} showMode={showMode} theme={theme} />
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <Footer theme={theme} />
                <div className={`go-to-up ${showTopBtn ? "show" : ""}`}>
                    <button onClick={() => goToTop()}><AiOutlineArrowUp /></button>
                </div>
            </div>
        </div>
    );
}

export default App;
