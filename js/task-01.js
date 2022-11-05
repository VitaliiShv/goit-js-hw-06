const categoryItemsEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItemsEl.length}`);

categoryItemsEl.forEach((item) => {
  const itemHeadingEl = item.querySelector("h2");
  console.log(`Category: ${itemHeadingEl.textContent}`);
  const itemMembersList = item.querySelectorAll("ul > li");
  console.log(`Elements: ${itemMembersList.length}`);
});
