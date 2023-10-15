
const categoriesList = document.getElementById("categories");

const categoriesItems = categoriesList.querySelectorAll("li.item");

console.log("Number of categories:", categoriesItems.length);
categoriesItems.forEach((category) => {
  
  const categoryName = category.querySelector("h2").textContent;

    const categoryElements = category.children;

    console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});








