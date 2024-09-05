/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-fit m-auto h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-700">${product.price}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
