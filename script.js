//your JS code here. If required.
function delayedHello() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Hello, world!");
        }, 1000);
      });
    }

    delayedHello().then((message) => {
      document.getElementById("output").textContent = message;
    });
