const reverse = (number) => {
    let reverse_number = 0;

    if(number < 0) {
        number = Math.abs(number)
        while(number > 0) {
            reverse_number = (reverse_number*10) + (number%10)
            number = Math.floor(number/10)
        }
        return reverse_number * -1
    
    } else if(number > 0) {
        
        while(number > 0) {
            reverse_number = (reverse_number*10) + (number%10)
            number = Math.floor(number/10)
        }
        return reverse_number
    
    } else if(number === 0) {
        return number
    }
};

reverse(123)
reverse(-123)
reverse(0)
reverse(1534236469)
reverse(210)