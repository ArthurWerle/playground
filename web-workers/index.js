console.log("💉 injecting index file")

const runButton = document.getElementById('webworkers')
runButton.addEventListener('click', () => {
  if (window.Worker) {
    console.log("Creating workers...")
    const Worker1 = new Worker("worker1.js")
    const worker1ResultElement = document.getElementById('worker1')

    const Worker2 = new Worker("worker2.js")
    const worker2ResultElement = document.getElementById('worker2')

    console.log("Starting workers....")
    Worker1.postMessage(true)
    Worker2.postMessage(true)

    Worker1.onmessage = function(e) {
      console.log('Message received from worker1 ', e.data)
      worker1ResultElement.innerText = e.data
    }

    Worker2.onmessage = function(e) {
      console.log('Message received from worker2 ', e.data)
      worker2ResultElement.innerText = e.data
    }

  } else {
    console.error("Browser doesn't support WebWorkers")
  }
})