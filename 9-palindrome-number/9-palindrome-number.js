/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let str = x.toString();
    let rev = str.split("").reverse().join("");
     
    // let revNum = Number(rev);
    if (rev == str){
        return true;
    } else{
        return false;
    }
    
};