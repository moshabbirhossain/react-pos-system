import { useState, useEffect } from "react";
import ProductHeader from "./ProductHeader";
import SingleProduct from './SingleProduct';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../redux/productSlice";
import Category from "../Category/Category";

const Products = () => {
    const [search, setSearch] = useState('');
    const products = useSelector(state => state.posCart.addProduct);
    const dispatch = useDispatch();

    console.log(search);


    // useEffect to automatically add product to cart when search matches
    useEffect(() => {
        if (search.trim() !== '') { // Check if there is a search term
            const matchingProducts = products.filter(item => item.id.toString().toLowerCase().includes(search.toLowerCase()));
            if (matchingProducts.length > 0) {
                // Automatically add the first matching product to the cart
                dispatch(addToCart(
                    {
                        id: matchingProducts[0].id,
                        name: matchingProducts[0].title,
                        image: matchingProducts[0].thumbnail,
                        category: matchingProducts[0].category,
                        price: matchingProducts[0].price,
                        quantity: matchingProducts[0].qty,
                    }
                ));
                setTimeout(() => {
                    setSearch('');
                },1000)
            }
        }
    }, [search, products, dispatch]);

    return (
        <>
            <ProductHeader setSearch={setSearch} search={search} />
            <Category/>
            <div className="pb-4">
            {
                products.length === 0 ? <div className=" text-center my-10">No Product Found</div>
                    :
                    <div className='p-5 pl-0  grid grid-cols-2 lg:grid-cols-3 gap-5 ml-5'>
                        {products
                            .filter(item => item.id.toString().toLowerCase().includes(search.toLowerCase())) // Ensure item.id is a string before calling toLowerCase()
                            .map((item, i) => <SingleProduct key={i} item={item} />)}
                    </div>
            }
            </div>
        </>
    );
};

export default Products;
