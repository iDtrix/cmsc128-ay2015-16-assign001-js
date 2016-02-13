//CMSC 128 Assignment
//Coded by: Daryl Patrick M. Roco
//AB-4L
//Number Library

//Function for numbers to words convertion
function numToWords(number){
	var map1 = [					//Map of Values
		'',
		'thousand',
		'million',
		'billion',
		'trillion',
	];

	var map2 = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];

	var map3 = [
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
	];

	var map4 = [
		'twenty',
		'thirty',
		'fourty',
		'fifty',
		'sixty',
		'seveny',
		'eighty',
		'ninety',
	];

	number = number.toString();						//Input to string conversion
	number = number.replace(/[\, ]/g,'');			

	if(number != parseFloat(number)){				//Checks if input is a numver
		return 'Not a number';
	}

	var numLength = number.indexOf('.');			//Checks if there are decimal points and gets the stringlength
	if(numLength == -1){
		numLength = number.length;
	}

	if(numLength > 15){
		return 'Input too big';
	}

	var splitString = number.split('');				//Splits input by spaces
	var word = '';
	var x = 0;

	for(var i=0;i<numLength;i++){
		if((numLength-i)%3==2){
			if(splitString[i] == '1'){
				word += map3[Number(splitString[i+1])] + ' '; //Tenths part
				i++;
				x=1;
			}else if(splitString[i]!=0){
				word += map4[splitString[i]-2] + ' ';
				x=1;
			}
		}else if(splitString[i]!=0){						//Gets the hundredths part
			word += map2[splitString[i]] + ' ';
			if((numLength-i)%3==0) word += 'hundred ';
			x=1;
		}
		if((numLength-i)%3==1){
			if(x) word += map1[(numLength-i-1)/3] + ' ';   // For thousandths part
			x=0;
		}
	}
	if(numLength != number.length){
		var y = number.length;
		word += 'point ';
		for (var i=numLength+1;i<y;i++) word += map2[splitString[i]] + ' ';
	}
	return word.replace(/\s+/g,' ');
}
//Function for words to numbers convertion
function wordsToNum(words){
	var wordMap = {									//Map of values
			"one": 1,
			"two": 2,
			"three": 3,
			"four": 4,
			"five": 5,
			"six": 6,
			"seven": 7,
			"eight": 8,
			"nine": 9,
			"ten": 10,
			"eleven": 11,
			"twelve": 12,
			"thirteen": 13,
			"fourteen": 14,
			"fifteen": 15,
			"sixteen": 16,
			"seventeen": 17,
			"eighteen": 18,
			"nineteen": 19,
			"twenty": 20,
			"thirty": 30,
			"forty": 40,
			"fifty": 50,
			"sixty": 60,
			"seventy": 70,
			"eighty": 80,
			"ninety": 90,
			"hundred": 100,
			"thousand": 1000,
			"million": 1000000
	}
	var prior = " ";
	prior = words.split(" ");						//Split the input by space
	var currentValue = 0;							//Variable Declarations
	var initialVaue = 0;
	var answer = 0;
	for(var i = 0; i < (prior.length); i++){
		currentValue = valueMap[prior[i]];			//Gets the equivalent value of input from the wordMap
		if(initialValue == 0){
			initialValue = currentValue						//If the initial value is 0
		}

		else if(initialValue > currentValue){				//Checks if the initial value is bigger than the current value
			initialValue = initialValue + currentValue;			//Adds the current value to the inital value
		}

		else{
			initialValue = initialValue * currentValue;			
		}
		if(initialVlaue>=1000){								
			answer = answer + initialValue;
			initialValue = 0;								
		}
	}
	answer = answer+initialValue;							
	return(answer);										//Returns the answer
}

//Function for converting words to numbers then adding the prefix currency
function wordsToCurrency(words,currency){
	var check = ["JPY", "PHP", "USD"];			
	var value = wordsToNum(words);				//Calls wordsToNum function to convert the word input to numbers
	var checker = valid.indexOf(currency)		//Checks if the input currency is valid
	if(checker!=-1){
		output = currency+value;				//Appends the currency to the output of wordsToNum function
		return (output);						
	}

}
//Function for adding a delimiter to an input number with the user providing the number of jumps the delimiter has to do
function numberDelimited(number,delimiter,jumps){

}