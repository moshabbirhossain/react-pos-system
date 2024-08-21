import Cart from "../Carts/Cart";
import Products from "../Products/Products";
import NewSideBar from "../NewSideBar/NewSideBar";

const Home = () => {
    return (
        <div className="">
            <div className="">
                <div className="hidden lg:block w-36 lg:fixed z-10 lg:h-screen lg:important bg-base-100 overflow-y-scroll">
                    <NewSideBar />
                </div>
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="w-full lg:w-[500px] lg:fixed lg:left-36 lg:mt-5 lg:h-screen bg-white rounded-lg shadow-md">
                        <Cart />
                    </div>
                    <div className="product-container w-full lg:w-1/2 lg:absolute lg:top-0 lg:right-0">
                        <Products />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
