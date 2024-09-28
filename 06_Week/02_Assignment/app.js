const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },

  {
    id: 4,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 5,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 6,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 7,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 8,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 9,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-1.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
];

const categories = [...new Set(menu.map((item) => item.category))];

function displayMenu(menuItems) {
  const sectionCenter = document.querySelector(".section-center");
  sectionCenter.innerHTML = "";

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    const menuLeft = document.createElement("div");
    const menuRight = document.createElement("div");
    const menuHeader = document.createElement("div");
    const menuContent = document.createElement("div");
    const hr = document.createElement("hr");

    menuItem.classList.add("menu-item");
    menuLeft.classList.add("menu-left");
    menuRight.classList.add("menu-right");
    menuHeader.classList.add("menu-header");
    menuContent.classList.add("menu-content");

    menuItem.innerHTML = "";
    menuLeft.innerHTML = "";
    menuRight.innerHTML = "";
    menuHeader.innerHTML = "";
    menuContent.innerHTML = "";

    menuItem.appendChild(menuLeft);
    menuItem.appendChild(menuRight);

    menuRight.appendChild(menuHeader);
    menuRight.appendChild(hr);
    menuRight.appendChild(menuContent);

    menuLeft.innerHTML = `
    <img src="${item.img}" alt="${item.title}" class="img-fluid" />`;

    menuHeader.innerHTML = `<h3>${item.title}</h3>
    <p class="price">$${item.price.toFixed(2)}</p>`;

    menuContent.innerHTML = `<p>${item.desc}</p>`;

    sectionCenter.appendChild(menuItem);
  });
}

function filterMenu(category) {
  if (category === "all") {
    displayMenu(menu);
  } else {
    const filteredMenu = menu.filter((item) => item.category === category);
    displayMenu(filteredMenu);
  }
}

function setupButtons() {
  const btnContainer = document.querySelector(".btn-container");
  btnContainer.innerHTML = "";

  const allButton = document.createElement("button");
  allButton.innerText = "All";
  allButton.classList.add("btn");
  allButton.addEventListener("click", () => filterMenu("all"));
  btnContainer.appendChild(allButton);

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.innerText = category;
    button.classList.add("btn");
    button.addEventListener("click", () => filterMenu(category));
    btnContainer.appendChild(button);
  });
}

function init() {
  setupButtons();
  displayMenu(menu);
}

window.addEventListener("DOMContentLoaded", init);
