// 1: Get the node with the  main title

console.log("Iteration 1: ", document.querySelector("h1"));

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

console.log("Iteration 2: ",document.querySelector("h1").innerText);

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

console.log("Iteration 3: ", document.getElementsByClassName("fruit-item"));

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the elements

console.log("Iteration 4: ", document.querySelector(".list-veggies ul").innerText);


// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

console.log("Iteration 5: ", document.querySelector(".list-veggies h2").innerText);

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

const fruitSection = document.querySelector(".list-fruits h2");
fruitSection.id = 'fruit-title';
console.log("Iteration 6: ", fruitSection);

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

const bestFruits = Array.from(document.getElementsByClassName("fruit-item"));
bestFruits[0].classList.add("best-fruit"); 
bestFruits[2].classList.add("best-fruit"); 
console.log(bestFruits[0], bestFruits[2]);


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

const veggieList = document.querySelector(".list-veggies ul");
veggieList.removeAttribute("class");
console.log(veggieList)

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

console.log()

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

console.log()

// => ... <li class="veggie-love">Spinach</li>
