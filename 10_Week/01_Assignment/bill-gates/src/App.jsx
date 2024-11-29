import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import ItemCard from "./components/Item/ItemCard.jsx";
import Receipt from "./components/Receipt/Receipt.jsx";

const initialBudget = 100_000_000_000;

const items = {
  1: {
    name: "Big Mac",
    price: 10000,
    img: "/images/1_big-mac.jpg",
  },

  2: {
    name: "Flip Flops",
    price: 20000,
    img: "/images/2_flip-flops.jpg",
  },

  3: {
    name: "Video Game",
    price: 50000,
    img: "/images/3_video-game.jpg",
  },

  4: {
    name: "Amazon Echo",
    price: 80000,
    img: "/images/4_amazon-echo.jpg",
  },

  5: {
    name: "Netflix",
    price: 30000,
    img: "/images/5_netflix.jpg",
  },

  6: {
    name: "Airpods",
    price: 800,
    img: "/images/6_airpods.jpg",
  },

  7: {
    name: "Gaming Console",
    price: 800000,
    img: "/images/7_gaming-console.jpg",
  },

  8: {
    name: "Smart Phone",
    price: 1000000,
    img: "/images/8_smartphone.jpg",
  },

  9: {
    name: "Drone",
    price: 100000,
    img: "/images/9_drone.jpg",
  },

  10: {
    name: "Ford-F150",
    price: 2000000,
    img: "/images/10_ford-f-150.jpg",
  },

  11: {
    name: "Tesla",
    price: 5000000,
    img: "/images/11_tesla.jpg",
  },

  12: {
    name: "Ferrari",
    price: 10000000,
    img: "/images/12_ferrari.jpg",
  },

  13: {
    name: "Mansion",
    price: 100000000,
    img: "/images/13_mansion.jpg",
  },

  14: {
    name: "Skyscraper",
    price: 150000000,
    img: "/images/14_skyscraper.jpg",
  },

  15: {
    name: "Cruise Ship",
    price: 250000000,
    img: "/images/15_cruise-ship.jpg",
  },

  16: {
    name: "NBA Team",
    price: 3500000000,
    img: "/images/16_nba-team.jpg",
  },
};

const emptyCart = structuredClone(items);
Object.values(emptyCart).forEach((item) => (item.quantity = 0));

function App() {
  const [budget, setBudget] = useState(initialBudget);
  const [cart, setCart] = useState(emptyCart);

  const updateCart = (id, operation) => {
    const itemPrice = items[id].price;

    setBudget((prevBudget) =>
      operation === "add" ? prevBudget - itemPrice : prevBudget + itemPrice
    );

    setCart((prevCart) => {
      const newCart = structuredClone(prevCart);
      newCart[id].quantity += operation === "add" ? 1 : -1;
      return newCart;
    });
  };

  const totalSpent = initialBudget - budget;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header budget={budget} />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(cart).map(([id, item]) => (
          <ItemCard
            key={id}
            id={id}
            item={item}
            budget={budget}
            updateCart={updateCart}
          />
        ))}
      </div>

      <Receipt cart={cart} totalSpent={totalSpent} />
    </div>
  );
}

export default App;
