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
            img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26023488/2023/11/24/44f447cb-8725-458d-9295-2787e5dc581f1700822412194NikeMenAirJordenAquaBasketballShoes1.jpg",
         },
         {
            code: "white",
            img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28282962/2024/3/15/0efd442f-bbd7-4a8c-8546-ce119b7b0b0b1710447831920JordanStayLoyal3MensShoes1.jpg",
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
            img: "https://www.superkicks.in/cdn/shop/files/2_b94d13b2-f25c-4475-8ca0-09763da5fa8f.jpg?v=1720607949&width=533",
         },
         {
            code: "white",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4pkq7yXk8N-TLL7JzAJSo-mHxbefwGPOfw&s",
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
            img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27063082/2024/1/26/598c4eec-bfd3-4e73-94c3-b13deb47c3411706276047867NikeDownshifter13MenRoadRunningShoes1.jpg",
         },
         {
            code: "white",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7L6uYUJhp9Wksvt_Tl6yz_-UMz_d3JhmwQ&s",
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
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBnAqMP5j3srDKoYfXGaRvaoN6OkNcWxCYA&s",
         },
         {
            code: "white",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5pIWeGDtTQ_16-nv-DjdIbe5T6LzTCn6Tw&s",
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
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6d2ZP_cVUKUag4FN5_u4615xms_M3H0AWw&s",
         },
         {
            code: "white",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLJ8kn4FwuGMcAcz5STndwFaF0l5kNxk1HQ&s",
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
      if (index < chosenProduct.colors.length) {
         colorElement.style.backgroundColor = chosenProduct.colors[index].code;
         colorElement.style.display = "block"; // Ensure the color is visible

         // Remove any previous event listeners before adding a new one
         const newColorClickHandler = () => {
            currentProductImg.src = chosenProduct.colors[index].img;
         };

         // Remove existing event listeners (if any) before adding a new one
         colorElement.replaceWith(colorElement.cloneNode(true));
         const clonedElement = document.querySelectorAll(".color")[index];
         clonedElement.addEventListener("click", newColorClickHandler);
      } else {
         colorElement.style.display = "none"; // Hide if no corresponding color exists
      }
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

