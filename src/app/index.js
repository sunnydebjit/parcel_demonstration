console.log("This is the HomePage");

// 1 Hot Module Reloading Script

if (module.hot) {
  module.hot.accept();
}

console.log("Toggle this comment to check HMR");

// Transpiling

const obj = {
  a: "Apple",
  b: "Banana",
  c: {
    food: "Cheesecake",
    car: "Chrysler",
  },
};

console.log("Transpilation on check-", obj?.c?.car, obj?.d?.pet);
