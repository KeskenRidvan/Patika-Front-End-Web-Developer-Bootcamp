import PropTypes from "prop-types";

function ItemCard({ id, item, budget, updateCart }) {
  return (
    <div className="border rounded-lg shadow flex flex-col items-center justify-between h-96">
      <img
        src={item.img}
        alt={item.name}
        className="mb-4 object-contain h-48 w-72 rounded"
      />

      <h3 className="text-xl font-bold text-center">{item.name}</h3>

      <p className="text-green-700 font-bold text-xl mb-4 text-center">
        Price: ${item.price.toLocaleString()}
      </p>

      <div className="flex px-4 pb-6 items-center space-x-2">
        <button
          onClick={() => updateCart(id, "remove")}
          disabled={item.quantity === 0}
          className="px-8 py-2 bg-blue-600 text-gray-50 font-semibold rounded disabled:bg-blue-500"
        >
          Sell
        </button>

        <span className="text-xl font-semibold text-center">
          {item.quantity}
        </span>

        <button
          onClick={() => updateCart(id, "add")}
          disabled={budget < item.price}
          className="px-8 py-2 bg-green-500 text-white font-semibold rounded disabled:bg-green-300"
        >
          Buy
        </button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    img: PropTypes.string,
  }).isRequired,
  budget: PropTypes.number.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default ItemCard;
