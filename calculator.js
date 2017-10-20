expression = "";
exprand = "0";
numOfLeftBraces = 0;
operator = false;

numOfPoint = 0;

function updateExpression() {
	if ( expression == "undefined")
		expression = document.getElementById("exprand").textContent;
	document.getElementById("expression").textContent = expression;
}

function updateExprand() {
	if ( exprand == "NaN" )
	{
		document.getElementById("exprand").className = "original";
		document.getElementById("exprand").textContent = "Infinity";
	}
	else if ( exprand != "undefined" )
	{	
		if (exprand.length > 33 )
			exprand = exprand.substring(0, exprand.length - 1);

		if (exprand.length <= 12 )
			document.getElementById("exprand").className = "original";
		else if (exprand.length > 12 && exprand.length <= 14 )
			document.getElementById("exprand").className = "smallSizeOne";
		else if (exprand.length > 14 && exprand.length <= 16 )
			document.getElementById("exprand").className = "smallSizeTwo";
		else if (exprand.length > 16 && exprand.length <= 18 )
			document.getElementById("exprand").className = "smallSizeThree";
		else if (exprand.length > 18 && exprand.length <= 20 )
			document.getElementById("exprand").className = "smallSizeFour";
		else if (exprand.length > 20 && exprand.length <= 22 )
			document.getElementById("exprand").className = "smallSizeFive";
		else if (exprand.length > 22 )
			document.getElementById("exprand").className = "smallSizeSix";

		document.getElementById("exprand").textContent = exprand;
	}
	else if ( exprand == "undefined" )
		exprand = document.getElementById("exprand").textContent;
}

function updateNumOfBraces() {
	if (numOfLeftBraces == 0)
		document.getElementById("numberOfBraces").textContent = "";
	else
		document.getElementById("numberOfBraces").textContent = "" + numOfLeftBraces;
}

function isOperator(op) {
	return ( op == "+" || op == "-" || op == "*" || op == "/");
}

function isValidExp() {
	return true;
}

function showError(message) {
	document.getElementById("error").textContent = "表达式错误！";
}

clickZero = function() {
	operator = false;
	if ( exprand == "0" )
		exprand = "";
	exprand += "0";
	updateExprand();
}

clickOne = function() {
	operator = false;
	if ( exprand == "0" )
		exprand = "";
	exprand += "1";
	updateExprand();
}

clickTwo = function() {
	operator = false;
	if ( exprand == "0" )
		exprand = "";
	exprand += "2";
	updateExprand();
}

clickThree = function() {
	operator = false;
	if ( exprand == "0" )
		exprand = "";
	exprand += "3";
	updateExprand();
}

clickFour = function() {
	operator = false;
	if ( exprand == "0" )
		exprand = "";
	exprand += "4";
	updateExprand();
}

clickFive = function() {
	operator = false;
	if ( exprand == "0" )
		exprand = "";
	exprand += "5";
	updateExprand();
}

clickSix = function() {
	operator = false;
	if ( exprand == "0" )
		exprand = "";
	exprand += "6";
	updateExprand();
}

clickSeven = function() {
	operator = false;
	if ( exprand == "0" )
		exprand = "";
	exprand += "7";
	updateExprand();
}

clickEight = function() {
	operator = false;
	if ( exprand == "0" )
		exprand = "";
	exprand += "8";
	updateExprand();
}

clickNine = function() {
	operator = false;
	if ( exprand == "0" )
		exprand = "";
	exprand += "9";
	updateExprand();
}

clickPlus = function() {
	operator = true;
	var last = expression.charAt(expression.length - 1);
	if ( exprand == "0" && (last == "*" || last == "/" ))
		expression += "1";
	else if ( last != ")" )
		expression += exprand;
	

	expression += "+";
	updateExpression();
	exprand = "0";

}

clickMinus = function() {
	operator = true;
	var last = expression.charAt(expression.length - 1);
	if ( exprand == "0" && (last == "*" || last == "/" ))
		expression += "1";
	else if ( last != ")" )
		expression += exprand;
	
	expression += "-";
	updateExpression();
	exprand = "0";
}

clickMultiple = function() {
	operator = true;
	if ( expression.charAt(expression.length - 1) != ")")
		expression += (exprand == "0" ? "1" : exprand);

	expression += "*";
	updateExpression();
	exprand = "0";
}

clickDivide = function() {
	operator = true;
	if ( expression.charAt(expression.length - 1) != ")")
		expression += (exprand == "0" ? "1" : exprand);

	expression += "/";
	updateExpression();
	exprand = "0";
}

clickPoint = function() {

	if ( exprand.indexOf(".") == -1 )
	{
		exprand += ".";
		operator = false;
	}
	++numOfPoint;
	updateExprand();
}

clickBackspace = function() {
	if (exprand == "Infinity" || exprand == "-Infinity")
		return;

	if ( exprand.charAt(exprand.length - 1) == "." )
		numOfPoint = 0;

	if ( exprand.length > 1 )
		exprand = exprand.substring(0, exprand.length - 1);
	else
		exprand = "0";

	if ( exprand == "0" )
		operator = true;

	updateExprand();
}

clickClear = function() {
	expression = "";
	exprand = "0";
	numOfPoint = 0;
	numOfOperator = 0;
	numOfLeftBraces = 0;
	operator = false;
	updateExprand();
	updateExpression();
	updateNumOfBraces();
}

clickLeft = function() {
	operator = false;
	expression += "(";
	exprand = "0";
	numOfLeftBraces++;
	numOfOperator = 0;
	updateExpression();
	updateNumOfBraces();
}


/*
clickRight function shoulb be paid extreme attention to
*/
clickRight = function() {
	operator = false;
	if ( numOfLeftBraces == 0 )
		return;

	var last = expression.charAt(expression.length - 1);
	
	
	if ( last == "+" || last == "-" )	
		expression += exprand;
	else if ( last == "*" || last == "/" )
		expression += (exprand == "0" ? "1" : exprand);

	if ( expression.charAt(expression.length - 1) == "(" )
		expression += exprand;

	expression += ")";
	numOfLeftBraces--;
	exprand = "0";
	updateExpression();
	updateNumOfBraces();
	
}

clickEqual = function() {
	var last = expression.charAt(expression.length - 1);	

	if ( operator == true && (last == "*"|| last == "/"))
		expression += "1";
	else if ( operator == true && (last == "+"|| last == "-"))
		expression += "0";
	else if ( operator == false && isOperator(last))
	{
		expression += exprand;
	}

	
	if ( isValidExp() )
	{		
		while (numOfLeftBraces) {
			clickRight();
		}
		
		exprand = "" + eval(expression);
		updateExprand();
	}
	else
	{
		showError(message);
	}
	
	numOfPoint = 0;
	operator = false;
	numOfLeftBraces = 0;
	updateExpression();
	updateNumOfBraces();
	
	expression = "";
	
}
