const gpuContainer = document.querySelector(".gpu-container");
const cpuContainer = document.querySelector(".cpu-container");
const ramContainer = document.querySelector(".ram-container");
const monitorContainer = document.querySelector('.monitor-container');

const products = [
  {
    id: 1,
    name: "RX 9070 XT",
    price: 120,
    category: "gpu",
    image: "./images/GPU/9070.png",
  },

  {
    id: 2,
    name: "RX 9060 XT",
    price: 100,
    category: "gpu",
    image: "./images/GPU/9060.png",
  },

  {
    id: 3,
    name: "RX 6800 XT",
    price: 90,
    category: "gpu",
    image: "./images/GPU/6800XT.jpg",
  },

  {
    id: 4,
    name: "RTX 5080",
    price: 230,
    category: "gpu",
    image: "./images/GPU/5080.jpg",
  },

  {
    id: 5,
    name: "RTX 5060",
    price: 200,
    category: "gpu",
    image: "./images/GPU/5060.png",
  },

  {
    id: 6,
    name: "RTX 5090 TI",
    price: 120,
    category: "gpu",
    image: "./images/GPU/2.png",
  },

  {
    id: 7,
    name: "RX 7950 XT",
    price: 100,
    category: "gpu",
    image: "./images/GPU/3.jpg",
  },

  {
    id: 8,
    name: "RX 9080 XT",
    price: 240,
    category: "gpu",
    image: "./images/GPU/4.jpg",
  },

  {
    id: 9,
    name: "core ultra 9 790",
    price: 70,
    category: "cpu",
    image: "./images/CPU/core 9 ultra.jpg",
  },

  {
    id: 10,
    name: "core 5 ultra 545",
    price: 45,
    category: "cpu",
    image: "./images/CPU/core ultra 5.png",
  },

  {
    id: 11,
    name: "i9 9900k",
    price: 80,
    category: "cpu",
    image: "./images/CPU/i9 9900k.jpg",
  },

  {
    id: 12,
    name: "Ryzen 3 3500",
    price: 15,
    category: "cpu",
    image: "./images/CPU/ryzeb.jpg",
  },

  {
    id: 13,
    name: "Ryzen 5 5600",
    price: 20,
    category: "cpu",
    image: "./images/CPU/ryzen.jpg",
  },

  {
    id: 14,
    name: "Ryzen 9 9000",
    price: 40,
    category: "cpu",
    image: "./images/CPU/ryzen9000.jpg",
  },
  {
    id: 15,
    name: "8GB DDR4",
    price: 30,
    category: "ram",
    image: "./images/RAM/1.jpg",
  },

  {
    id: 16,
    name: "8GB DDR5",
    price: 40,
    category: "ram",
    image: "./images/RAM/2.jpg",
  },

  {
    id: 17,
    name: "64GB DDR5 ",
    price: 290,
    category: "ram",
    image: "./images/RAM/3.jpg",
  },

  {
    id: 18,
    name: "64GB DDR4",
    price: 225,
    category: "ram",
    image: "./images/RAM/4.png",
  },

  {
    id: 19,
    name: "8GB DDR5",
    price: 80,
    category: "ram",
    image: "./images/RAM/5.jpg",
  },

  {
    id: 20,
    name: "16GB DDR4",
    price: 58,
    category: "ram",
    image: "./images/RAM/6.jpg",
  },

  {
    id: 21,
    name: "32GB DDR5",
    price: 160,
    category: "ram",
    image: "./images/RAM/7.png",
  },

  {
    id: 22,
    name: "32GB DDR4",
    price: 100,
    category: "ram",
    image: "./images/RAM/8.jpg",
  },

  {
    id: 23,
    name: "LG 32 Inch 4K",
    price: 120,
    category: "monitor",
    image: "./images/Monitor/1.jpg",
  },

  {
    id: 24,
    name: "LG 27 Inch FHD",
    price: 100,
    category: "monitor",
    image: "./images/Monitor/2.png",
  },

  {
    id: 25,
    name: "ASUS ROG 32 Inch QHD",
    price: 160,
    category: "monitor",
    image: "./images/Monitor/3.jpg",
  },

  {
    id: 26,
    name: "SAMSUNG 48 Inch OLED",
    price: 400,
    category: "monitor",
    image: "./images/Monitor/4.jpg",
  },

  {
    id: 27,
    name: "SAMSUNG 49 Inch OLED",
    price: 434,
    category: "monitor",
    image: "./images/Monitor/5.jpg",
  },

  {
    id: 28,
    name: "SAMSUNG 28 Inch FHD",
    price: 90,
    category: "monitor",
    image: "./images/Monitor/6.jpg",
  },

  {
    id: 29,
    name: "ASUS 34 inch 4K",
    price: 190,
    category: "monitor",
    image: "./images/Monitor/7.jpg",
  },

  {
    id: 31,
    name: "ASUS 32 inch QHD",
    price: 150,
    category: "monitor",
    image: "./images/Monitor/8.jpg",
  },
];

products.forEach((product) => {


  if (product.category === "gpu") {
    const cardHTML = `
    <article class="gpu-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} میلیون تومان</p> 
    </article>
`;
    gpuContainer.insertAdjacentHTML("beforeend", cardHTML);
  }
  
  else if (product.category === "cpu") {
    const cardHTML = `
    <article class="gpu-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} میلیون تومان</p> 
    </article>
`;
    cpuContainer.insertAdjacentHTML("beforeend", cardHTML);
  } 
  
  else if (product.category === "ram") {
    const cardHTML = `
    <article class="gpu-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} میلیون تومان</p> 
    </article>
`;
    ramContainer.insertAdjacentHTML("beforeend", cardHTML);
  }

  else if (product.category === "monitor") {
    const cardHTML = `
    <article class="gpu-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} میلیون تومان</p> 
    </article>
`;
    monitorContainer.insertAdjacentHTML("beforeend", cardHTML);
  }
});



gpuContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  gpuContainer.scrollLeft += event.deltaY;
});
cpuContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  cpuContainer.scrollLeft += event.deltaY;
});
ramContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  ramContainer.scrollLeft += event.deltaY;
});
monitorContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  monitorContainer.scrollLeft += event.deltaY;
});

