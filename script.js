function isSameType(value1, value2) {
	if(Number.isNaN(value1) && Number.isNaN(value2)){
		return true;
	}
	else if(typeof value1 === typeof value2){
		return true;
	}else{
		return false;
	}
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
