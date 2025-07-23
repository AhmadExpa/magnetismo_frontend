import React from "react";
import pimg from "../assets/product/main.png";
import payment from "../assets/footer/payment.png";
import pimge from "../assets/product/pGif.gif";
import { useEffect } from "react";
const Checkout = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen bg-gray-100 pt-10 flex flex-col items-center max-w-[1360px] mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#273771] mb-8">Checkout</h1>

      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        
        
        <div className="md:w-2/3 p-6  rounded-md">
          <h2 className="text-lg font-semibold text-[#273771] mb-4">Shipping Information</h2>
         
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">First Name</label>
                <input type="text" placeholder="First name" className="border p-2 bg-gray-100 rounded w-full" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Name</label>
                <input type="text" placeholder="Last name" className="border p-2 bg-gray-100 rounded w-full" />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Address</label>
              <input type="text" placeholder="Street Address" className="border p-2 bg-gray-100 rounded w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Country</label>
                <select className="border p-2 rounded bg-gray-100 w-full">
                  <option>Select...</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Region/State</label>
                <select className="border p-2 rounded bg-gray-100 w-full">
                  <option>Select...</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">City</label>
                <select className="border p-2 bg-gray-100 rounded w-full">
                  <option>Select...</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Zip Code</label>
                <input type="text" placeholder="Zip Code" className="border bg-gray-100 p-2 rounded w-full" />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input type="email" placeholder="Email" className="border p-2 bg-gray-100 rounded w-full" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <input type="tel" placeholder="Phone Number" className="border p-2 bg-gray-100 rounded w-full" />
            </div>

            
            <div className="flex items-center gap-2">
              <input type="checkbox" id="ship-different" />
              <label htmlFor="ship-different" className="text-sm text-gray-600">Ship to a different address</label>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-[#273771] mb-2">Payment Option</h2>
              <img src={payment} alt="Payment Methods" className="w-96 h-8 mb-4" />

              <div>
                <label className="text-sm text-gray-600">Name on Card</label>
                <input type="text" placeholder="Full Name" className="border p-2 bg-gray-100 rounded w-full" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" className="border p-2 bg-gray-100 rounded w-full" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" className="border p-2 bg-gray-100 rounded w-full" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">CVC</label>
                  <input type="text" placeholder="CVC" className="border p-2 bg-gray-100 rounded w-full" />
                </div>
              </div>
            </div>

           
            <div>
              <h2 className="text-lg font-semibold text-[#273771] mb-2">Additional Information</h2>
              <label className="text-sm text-gray-600">Notes about your order (optional)</label>
              <textarea className="border p-2 bg-gray-100 rounded w-full h-20"></textarea>
            </div>
          </form>
        </div>

        
        <div className="p-6 border border-gray-300 rounded-md md:w-1/3 self-start">
          <h2 className="text-lg font-semibold text-[#273771] mb-4">Order Summary</h2>

          <div className="flex gap-4 pb-4">
            <img src={pimg} alt="Magnetismo" className="w-16 h-16 object-cover rounded" />
            <div className="mt-4">
              <h3 className="font-semibold">Magnetismo</h3>
            </div>
          </div>

          <div className="mt-4 space-y-2 border-b border-gray-400 pb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Sub-total</span>
              <span>$49.90</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span>$10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>$61.99</span>
            </div>
          </div>

          <div className="mt-4 pt-2 flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-[#273771]">$111.89 USD</span>
          </div>

          <button className="bg-[#556EAF] hover:bg-[#273771] text-white w-full py-2 rounded uppercase font-semibold text-sm mt-4">
            Place Order
          </button>
        </div>

      </div>

      {/* Full-width Image */}
      <div className="w-full">
        <img src={pimge} alt="" className="w-full h-auto object-cover" />
      </div>

    </div>
  );
};

export default Checkout;
