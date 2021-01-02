const reverseNumberFun = (number) => {
    let reverse_num = 0;
    while(number > 0) {
      reverse_num = (reverse_num*10) + (number%10);
      number = Math.floor(number / 10)
    }
    return reverse_num 
} 
  
const isPalindrome = (number) => {
    const reverseNumber = reverseNumberFun(number)
    if(number === reverseNumber && reverseNumber < 0x7FFFFFFF) {
        return true
    } else {
        return false
    }
};

isPalindrome(121)
isPalindrome(-121)
isPalindrome(0)