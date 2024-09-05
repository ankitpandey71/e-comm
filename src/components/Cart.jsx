import { Link } from "react-router-dom";

const Cart = () => {
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 mb-4"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-700">Price: ${item.price}</p>
              <p className="text-gray-700">Quantity: {item.quantity}</p>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-end">
            <Link
              to="/checkout"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
