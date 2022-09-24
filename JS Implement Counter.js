let addCount = document.getElementById("increment")
let decCount = document.getElementById("decrement")
let res = document.getElementById("counter")
// let counter = 0

addCount.addEventListener("click", ()=>{
  // counter+=1
  // res.textContent = counter
  res.textContent = Number(res.textContent) + Number(1)
})
decCount.addEventListener("click", ()=>{
  // counter-=1
  res.textContent = Number(res.textContent) - Number(1)
})
