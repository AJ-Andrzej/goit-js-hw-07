const categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.children.length}`);

const itemsArr = [...categories.children]

for (const item of itemsArr) {
    console.log(`Category: ${item.children[0].textContent}`)
    console.log(`Elements: ${item.children[1].children.length}`)
}