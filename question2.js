//used setTimeout to delay the greeting by 2 seconds
function delayedGreeting(name) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
    }, 2000);
  }

  // call delayedGreeting function with alice
  delayedGreeting("Alice");
  