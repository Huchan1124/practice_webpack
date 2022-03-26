import scss from "./style.scss";
console.log(2)

function add(a, b) {
    return a + b;
}

const result = add(3, 3)

console.log(result)


document.querySelector('span').textContent = result;