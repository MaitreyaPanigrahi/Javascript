const accountId = 122234;
let emailId = 'maitreya@google.com';
var accountPassword = '12345';
accountCity = 'Balasore';

let accountState;

// accountId = 3; // Not Allowed



emailId = 'mp@gmail.com';
accountPassword = '09876';
accountCity = 'Kolkata';
console.log(accountId);

/*
Prefer Not to use var because of 
the issue in block scope and functional scope 
*/

console.table([emailId,accountId,accountPassword,accountCity,accountState]);