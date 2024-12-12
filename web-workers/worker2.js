onmessage = function(shouldRun) {
  if (shouldRun) {
    Array.from({length: 100000}, (_, i) => {
      postMessage('Message from worker2.js iterating on index '+ i)
    })
  } else {
    postMessage('Worker2.js stopped')
  }
}