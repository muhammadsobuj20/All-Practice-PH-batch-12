
//!LEAP YEAR ber korar duto rule 

function leapYear(year){
    const leap=year/4;
    return true;
}

// console.log(leapYear(2054));

function isLeapYear(year){
        if(year%100!==0 && year%4===0){
            return true;
        }
        if(year%100===0 && year%400===0){
            return true;
        }
        return false;
    }


 console.log(isLeapYear(2040));
 console.log(isLeapYear(2041));
 console.log(isLeapYear(2042));
 console.log(isLeapYear(2043));
 console.log(isLeapYear(2044));