document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    item: [
      { id: 1, name: "Robusta Brazil", img: "1.jpeg", price: 20000 },
      { id: 1, name: "Arabice Blend", img: "2.jpg", price: 25000 },
      { id: 1, name: "Primo Passo", img: "3.jpeg", price: 30000 },
      { id: 1, name: "Aceh Gayo", img: "4.jpg", price: 35000 },
      { id: 1, name: "Sumatra Mandheling", img: "5.jpeg", price: 40000 },
    ],
  }));
});
