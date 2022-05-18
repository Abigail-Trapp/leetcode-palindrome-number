var isPalindrome = function(x) {
    let split = Array.from(String(x), Number)
    let reversed = split.reverse()
    let reversedJoined = reversed.join('')
    if(reversedJoined == x){
        return true
    } else return false
  };
  
  console.log(isPalindrome(121))