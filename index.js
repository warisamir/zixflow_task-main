function addNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        const error = new Error('Invalid input: Both inputs must be valid numbers.');
        console.error(error.message);
        throw error;
    }

    return num1 + num2;
}

try {
    const result = addNumbers(5, 10);
    console.log(result); // This line will print the result in the console
} catch (error) {
    // Handle the error here if needed
    console.error('An error occurred:', error.message);
}
