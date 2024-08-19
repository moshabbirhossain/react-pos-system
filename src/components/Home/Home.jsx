import Cart from "../Carts/Cart";
import Products from "../Products/Products";
import NewSideBar from "../NewSideBar/NewSideBar";

const Home = () => {
    return (
        <div>
            <div className="home-container ">
                <div className="w-1/12 fixed z-10 h-screen important bg-gray-50">
                    <NewSideBar/>
                </div>
                <div className="cart-container">
                    <Cart />
                </div>
                <div className="product-container">
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default Home;