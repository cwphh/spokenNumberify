# spokenNumberify

Describe the process that will take a number [0 - 999,999,999,999] and convert it into its spoken equivalent. For example, 167 would convert to "one hundred and sixty seven".

We’d create a program with two functions for this task. The first function will take our input number and divide it into chunks of billions, millions, hundreds of thousands and thousands and combine everything into the final output. The second function will take these small chunks of number which and return their spoken values. As it happens, it will probably be easier to write the second function first. The process would be as follows:

Build Function 2

This takes a parameter which can be from one to three digits and returns the spoken equivalent in the form of “x hundred and x’ty x’. The first thing is to judge the length of the input. If it’s 3 digits long, we take the first digit and turn it into hundreds. The digit is mapped to an array of number words to convert 3 to ‘three’. If there are only two digits, then we process the first digit as tens and map it to a different array with corresponding number words like ‘thirty’.

Build Function 1

Split the number into chunks using the comma as a separator ready to feed the pieces into the second function one by one. We’ll be able to tell from the length of the array how to build the result string. If there are 4 chunks, then we will suffix the first return with ‘billion’ such as x hundred and x’ty x billion. In this way we can build up the final spoke equivalent output.

Testing & Tweaking

Once the two functions are written it’s time to test them out to see how they perform. It’s likely that we’ll quickly find some scenarios where tweaks are needed. We’d probably need to add a few conditionals in the functions to handle certain situations such as plurals & ‘and’ words. That’s pretty much it.
