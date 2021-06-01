//(freecodecamp.org)

// Quoting Strings with Single QuotesPassed

/*
String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote.
Unlike some other programming languages, single and double quotes work the same in JavaScript.
*/
doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';

/*
The reason why you might want to use one type of quote over the other is if you want to use both in a string.
This might happen if you want to save a conversation in a string and have the conversation in quotes.
Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.
*/
conversation = 'Finn exclaims to Jake, "Algebraic!"';

/*
However, this becomes a problem if you need to use the outermost quotes within it.
Remember, a string has the same kind of quote at the beginning and end.
But if you have that same quote somewhere in the middle, the string will stop early and throw an error.
*/
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
//badStr = 'Finn responds, "Let's go!"';

//Here badStr will throw an error.

//In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

//Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing.

// Example:
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(myStr) // Result: I am a "double quoted" string inside "double quotes".

// Escape Sequences in Strings

/*
Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

1. To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
2. To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
3. We learned this in the previous challenge.

Code = Output
\'	= single quote
\"	= double quote
\\	= backslash
\n	= newline (leaves an empty space below in the console)
\r	= carriage return
\t	= tab (leaves a large amount of space left in the console)
\b	= word boundary
\f	= form feed

Note that the backslash itself must be escaped in order to display as a backslash.
*/

// Example:

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)