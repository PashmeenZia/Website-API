import React from 'react';

const Delivery = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-800">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-white font-serif flex justify-center items-center mb-6">Delivery Information</h1>
        <div className="bg-slate-200 shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Track Your Order</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
                Order ID
              </label>
              <input
                type="text"
                id="orderId"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your order ID"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Track Order
            </button>
          </form>
        </div>

        <div className="bg-slate-200 shadow-md rounded-md p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Delivery Policies</h2>
          <p className="text-sm">
            We aim to deliver your products within 1 hour for working time. For more details, contact our
            support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
