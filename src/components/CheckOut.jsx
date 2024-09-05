/* eslint-disable react/prop-types */

const CheckOut = () => {
  // Fetch cart items from state or context
  const cartItems = [
    {
      id: 1,
      title: "Product 1",
      price: 19.99,
      quantity: 2,
    },
    {
      id: 2,
      title: "Product 2",
      price: 29.99,
      quantity: 1,
    },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">CheckOut</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 mb-4"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-700">Price: ${item.price}</p>
              <p className="text-gray-700">Quantity: {item.quantity}</p>
            </div>
          ))}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </h3>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Billing Information</h2>
          <form className="bg-white rounded-lg shadow-md p-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border rounded-lg py-2 px-4 w-full"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border rounded-lg py-2 px-4 w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block font-semibold mb-2">
                Address
              </label>
              <textarea
                id="address"
                className="border rounded-lg py-2 px-4 w-full"
                placeholder="Enter your address"
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
