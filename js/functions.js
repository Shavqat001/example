function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

setTimeout(()=>{
    document.head.querySelector('style').remove();
}, 1500)
