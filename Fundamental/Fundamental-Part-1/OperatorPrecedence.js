/*
Left-Associativity: Operators are evaluated from left to right. Example: 10 - 5 + 2 evaluates as (10 - 5) + 2.
Right-Associativity: Operators are evaluated from right to left. Example: 2 ** 3 ** 2 evaluates as 2 ** (3 ** 2).

/?.
The optional chaining operator returns undefined instead of causing an error if a reference is nullish (null or undefined).
*/
// let a = 5;
// let b = a++;
// console.log(a, b);
// let c = b--;
// console.log(b, a, c);

/*
Sure! Let's break down the postfix and prefix increment/decrement operators in simple terms, and I'll provide examples for each.

1. Postfix Increment Operator (A++)
What it does: The value of A is used first in the expression, and then A is incremented by 1.
How it works: The current value of A is used in any operation, and only after that, A is increased.
Example:

cpp
Copy
int A = 5;
int B = A++; // B gets the value of A, and then A is incremented
Step-by-step:
B = A++: B gets the current value of A (which is 5).
Then, A is incremented by 1, so A becomes 6.
After the operation:
A = 6
B = 5
2. Postfix Decrement Operator (A--)
What it does: The value of A is used first in the expression, and then A is decremented by 1.
How it works: The current value of A is used in any operation, and only after that, A is decreased.
Example:

cpp
Copy
int A = 5;
int B = A--; // B gets the value of A, and then A is decremented
Step-by-step:
B = A--: B gets the current value of A (which is 5).
Then, A is decremented by 1, so A becomes 4.
After the operation:
A = 4
B = 5
3. Prefix Increment Operator (++A)
What it does: A is incremented first, and then the new value of A is used in the expression.
How it works: A is increased before being used in any operation.
Example:

cpp
Copy
int A = 5;
int B = ++A; // A is incremented first, then B gets the new value of A
Step-by-step:
++A: First, A is incremented by 1, so A becomes 6.
B = ++A: Now, B gets the updated value of A (which is 6).
After the operation:
A = 6
B = 6
4. Prefix Decrement Operator (--A)
What it does: A is decremented first, and then the new value of A is used in the expression.
How it works: A is decreased before being used in any operation.
Example:

cpp
Copy
int A = 5;
int B = --A; // A is decremented first, then B gets the new value of A
Step-by-step:
--A: First, A is decremented by 1, so A becomes 4.
B = --A: Now, B gets the updated value of A (which is 4).
After the operation:
A = 4
B = 4
Summary of Differences:
Postfix (A++): Use the current value of A first, then increment A.
Prefix (++A): Increment A first, then use the new value of A.
Similarly for --, postfix (A--) uses the current value and then decrements A, while prefix (--A) decrements A first and then uses the new value.
Visual Recap:
Operator	Example	Action on A	          Final Values
A++	      B = A++	Use A then increment	A=6, B=5 (if A was initially 5)
A--	      B = A--	Use A then decrement	A=4, B=5 (if A was initially 5)
++A	      B = ++A	Increment A then use	A=6, B=6 (if A was initially 5)
--A	      B = --A	Decrement A then use	A=4, B=4 (if A was initially 5) */
