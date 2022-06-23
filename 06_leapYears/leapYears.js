const leapYears = function() {
    var years = 1996;
    var result;
    if(years/4){
        result = true;
    }
    else{
        result = false;
    }
    return result;
};

// Do not edit below this line
module.exports = leapYears;
