function foo(a,b){    if (a === 1 && b === 2) {        return true;    } else {        return false;    }}console.log(foo(1,2)); //true console.log(foo(1,"2"));//false console.log(foo(1, "2")); //false Using the strict equality operator (===) prevents type coercion, ensuring that the comparison is accurate.