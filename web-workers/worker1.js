onmessage = function(shouldRun) {
  if (shouldRun) {
    Array.from({length: 250000}, (_, i) => {
      postMessage('Message from worker1.js iterating on index '+ i)
    })
  } else {
    postMessage('Worker1.js stopped')
  }
}