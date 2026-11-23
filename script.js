const gpuContainer = document.querySelector(".gpu-container");

const products = [
  {
    id: 1,
    name: "RX 9070 XT",
    price: 1200,
    category: "gpu",
    image: "./images/GPU/9070.png",
  },

  {
    id: 2,
    name: "RX 9060 XT",
    price: 1000,
    category: "gpu",
    image: "./images/GPU/9060.png",
  },

  {
    id: 3,
    name: "RX 6800 XT",
    price: 900,
    category: "gpu",
    image: "./images/GPU/6800XT.jpg",
  },

  {
    id: 4,
    name: "RTX 5080",
    price: 2300,
    category: "gpu",
    image: "./images/GPU/5080.jpg",
  },

  {
    id: 5,
    name: "RTX 5060",
    price: 2000,
    category: "gpu",
    image: "./images/GPU/5060.png",
  },
];

products.forEach((product) => {
  if (product.category === "gpu") {
    const cardHTML = `
    <article class="gpu-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    </article>
`;
    gpuContainer.insertAdjacentHTML("beforeend", cardHTML);
  }
});
gpuContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  gpuContainer.scrollLeft += event.deltaY;
});
