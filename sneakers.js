const wrap = document.querySelector(".sliderwrapper");
console.log(wrap);
const items = document.querySelectorAll(".menuitem");

const products = [
   {
      id: 1,
      title: "Jordan",
      price: 200,
      colors: [
         {
            code: "black",
            img: "Screenshot (81).png",
         },
         {
            code: "white",
            img: "Screenshot (82).png",
         },
      ],
   },
   {
      id: 2,
      title: "Air Force",
      price: 500,
      colors: [
         {
            code: "black",
            img: "black air force.png",
         },
         {
            code: "white",
            img: "Screenshot (83).png",
         },
      ],
   },
   {
      id: 3,
      title: "Blazer",
      price: 400,
      colors: [
         {
            code: "black",
            img: "black air force.png",
         },
         {
            code: "darkblue",
            img: "Screenshot (83).png",
         },
      ],
   },
   {
      id: 4,
      title: "Crater",
      price: 600,
      colors: [
         {
            code: "black",
            img:"black air force.png",
         },
         {
            code: "darkblue",
            img: "Screenshot (83).png",
         },
      ],
   },
   {
      id: 5,
      title: "Hippie",
      price: 400,
      colors: [
         {
            code: "black",
            img: "black air force.png",
         },
         {
            code: "darkblue",
            img: "Screenshot (83).png",
         },
      ],
   },
];

let chosenProduct = products[0];
const currentProductImg = document.querySelector(".productimg");
const currentProductTitle = document.querySelector(".producttitle");
const currentProductPrice = document.querySelector(".productprice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Function to update product colors
const updateColors = () => {
   currentProductColors.forEach((colorElement, index) => {
      colorElement.style.backgroundColor = chosenProduct.colors[index].code;
      // Update image when clicking on a color
      colorElement.addEventListener("click", () => {
         currentProductImg.src = chosenProduct.colors[index].img;
      });
   });
};

// Event listener for each menu item
items.forEach((item, index) => {
   item.addEventListener("click", () => {
      // Change the current slide
      wrap.style.transform = `translateX(${-100 * index}vw)`;

      // Update the chosen product
      chosenProduct = products[index];

      // Update the product information
      currentProductTitle.textContent = chosenProduct.title;
      currentProductPrice.textContent = "$" + chosenProduct.price;
      currentProductImg.src = chosenProduct.colors[0].img;

      // Update product colors
      updateColors();
   });
});

// Initial setup to display colors for the first product
updateColors();

currentProductSizes.forEach((size, index)=>
{
  size.addEventListener("click",()=>
{
   currentProductSizes.forEach((size)=>
   {
      size.style.backgroundColor="white";
      size.style.color="black";
   });
   size.style.backgroundColor="black";
   size.style.color="white";
});
});
const productbutton  = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbutton.addEventListener("click",()=>
{
   payment.style.display="flex"
})
close.addEventListener("click",()=>
{
   payment.style.display="none"
})

