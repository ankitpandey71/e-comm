import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          E-commerce App
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/cart" className="text-gray-600 hover:text-gray-800">
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/checkout"
                className="text-gray-600 hover:text-gray-800"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
