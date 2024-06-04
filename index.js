const counterEl = document.querySelector('[data-find="counterValue"]');
const addPoolBtn = document.getElementById("addPoolBtn");
const resetBtn = document.getElementById("resetBtn");

console.log(addPoolBtn.dataset);

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;

addPoolBtn.addEventListener('click', function() {
    counter = counter + parseInt(addPoolBtn.dataset.pool);
    counterEl.innerHTML = counter;
})

resetBtn.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE;
    counterEl.innerHTML = counter;
})