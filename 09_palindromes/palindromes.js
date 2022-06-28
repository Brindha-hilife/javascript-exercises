const palindromes = function (string) {
    var text =  'racecar';
    var result = text.split('').reverse().join('');
    if (string == result){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
