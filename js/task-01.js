
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log("Number of categories:", categoriesItems.length);

categoriesItems.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});







