// Exposed credentials (security issue)
const API_KEY = "12345-abcdef-67890";  

// Unhandled error scenario
fetch('https://example.com/data')
  .then(response => response.json())
  .then(data => console.log(data)); // No error handling

// Weak hashing algorithm (potential vulnerability)
const crypto = require('crypto');
const hash = crypto.createHash('md5').update('password').digest('hex');
console.log(`Weak Hash: ${hash}`);

// Insecure eval usage (security risk)
const userInput = "alert('XSS Attack!')";
eval(userInput);  // Dangerous usage
