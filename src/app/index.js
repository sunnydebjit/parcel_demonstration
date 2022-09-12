console.log("This is the HomePage");

// 1 Hot Module Reloading Script

if (module.hot) {
  module.hot.accept();
}

console.log("Toggle this comment to check HMR");
