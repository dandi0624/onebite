// function add(a, b) {
//   setTimeout(() => {
//     const sum = a + b;
//     console.log(sum);
//   }, 3000);
// }

// add(2, 3);

// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(2, 3, (value) => {
//   console.log(value);
// });

//--------------------

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(foood, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownFood) => {
    console.log(cooldownFood);

    freezeFood(cooldownFood, (freezedFood) => {
      console.log(freezeFood);
    });
  });
});
