var isPalindrome = function(x) {
    let split = Array.from(String(x), Number)
    let reversed = split.reverse()
    let reversedJoined = reversed.join('')
    if(reversedJoined == x){
        return true
    } else return false
  };
  
  let div = document.querySelector("div")
  let p = document.createElement("p")
  let button = document.querySelector("button").addEventListener("click", (e)=>{
      e.preventDefault()
      let input = document.getElementById("input").value
    p.innerText = `${isPalindrome(input)}`
    div.append(p)
  })


  