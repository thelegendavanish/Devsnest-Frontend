const { secretCode, messageBox } = require('./secret')

/* There is a secret message inside messageBox, that can be accessed only via secretCode
both are provided to you. 
messageBox is a JavaScript object, 
secretCode is a secret string value that is the key for that secret message
Use square brackets notation to retrieve the secret message and assign it to 
the provided variable `secretMessage` */

// Store the result in this variable
var secretMessage

/* code from here */
secretMessage = messageBox.[secretCode]

/* to here */

try { module.exports = { secretMessage } } catch (e) { } 
