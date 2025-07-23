import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import pimg from "../assets/product/img1.png";
import payment from "../assets/footer/payment.png";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearCart,
} from "../store/features/cartSlice";
import { useCreateShopifyCartMutation } from "../store/useRtkQuery";

const ShoppingCart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const { products } = useAppSelector("cartSlice");
  const [createShopifyCart, { isLoading: isCheckoutLoading }] =
    useCreateShopifyCartMutation();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCart = () => {
    navigate("/product/#carrt");
  };

  const increaseQuantity = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const decreaseQuantity = (product) => {
    dispatch(removeFromCart({ id: product.id }));
  };

  const handleCheckout = async () => {
    if (!products || products.length === 0) return;

    const lineItemsInput = products.map((product) => ({
      quantity: product.quantity,
      merchandiseId: product.id,
    }));

    try {
      const response = await createShopifyCart(lineItemsInput).unwrap();
      const checkoutUrl = response?.data?.cartCreate?.cart?.checkoutUrl;
      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error);
    }
  };

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col bg-gray-100 items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-bold text-gray-700">
          Your cart is empty.
        </h1>
        <p className="text-gray-500 mt-2">
          Looks like you haven't added anything to your cart yet.
        </p>
        <button
          onClick={handleCart}
          className="mt-6 bg-[#556EAF] hover:bg-[#273771] text-white px-6 py-2 rounded text-sm uppercase"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className=" bg-gray-100 max-w-[1360px] mx-auto">
      <h1 className="text-[40px] font-bold text-center text-[#273771] md:mb-10 md:pt-16">
        Cart.
      </h1>

      <div className="flex flex-col md:flex-row md:gap-6 max-w-5xl mx-auto ">
        <div className="w-full md:w-1/2 md:p-4 p-2">
          <h2 className="uppercase text-sm border border-gray-300 p-2 font-semibold mb-4">
            Product
          </h2>

          {products.map((product, index) => (
            <div key={index} className="flex gap-4 border-b pb-4">
              <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center">
                <img
                  src={pimg}
                  alt="Product"
                  className="w-16 h-16 object-cover "
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 line-through text-sm">
                    $49.00
                  </span>
                  <span className="font-bold">${product.price}</span>
                </div>

                <button className="mt-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  SAVE $10.00
                </button>

                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decreaseQuantity(product)}
                    className="w-6 h-6 border rounded-l flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-8 h-6 border-t border-b flex items-center justify-center">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(product)}
                    className="w-6 h-6 border rounded-r flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleClearCart}
                  className="text-gray-600 text-md border-b border-gray-400 mt-3"
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2">
          <div className="border rounded p-4 mb-4">
            <h2 className="uppercase text-sm font-semibold mb-4">Total</h2>

            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Sub-total</span>
              <span>
                $
                {products
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Discount</span>
              <span>$0.00</span>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Tax</span>
              <span>$0.00</span>
            </div>

            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-[#273771]">
                  $
                  {products
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}{" "}
                  USD
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleCheckout}
              className="bg-[#556EAF] hover:bg-[#273771] text-white p-3 rounded uppercase font-semibold text-sm flex items-center justify-center"
              disabled={isCheckoutLoading}
            >
              {isCheckoutLoading
                ? "Proceeding to Checkout..."
                : "Proceed to Checkout"}
            </button>
          </div>

          <div className="mt-6 border rounded p-4">
            <img src={payment} alt="Payment Methods" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
