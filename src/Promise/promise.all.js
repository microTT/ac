function all(events) {
    let stack = [];
    function wrapByPromise(event) {
      if (event instanceof Promise) {
        return event;
      }
      return Promise.resolve(event);
    }

    return new Promise((resolve, reject) => {
      events.map(wrapByPromise).forEach(event => {
        console.log(event);
        event.then(res => {
          stack.push(res);
          if (stack.length === events.length) {
            resolve(stack);
          }
        }).catch(reject)
      })
    });
}

let value2 = 'init';
function setVal2() {
  return new Promise(resolve => {
    setTimeout(() => {
      value2 = 'settled'
      console.log('delay run');
    }, 2000)
  })
}

async function main() {
  console.log(value2)
  try {
    // const results = await all([1, 2, Promise.reject('hhhh'), x4, 5, setVal2()]);
    const results = await Promise.all([1, 2, Promise.reject('hhhh'), 4, 5, setVal2()]);
    console.log(results);

  } catch (error ) {
    console.log(error)
  }
  console.log(value2)
}

// main();

console.log(Promise.resolve(Promise.resolve(1)))
