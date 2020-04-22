// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// Reminder to use env variables before deploy to prod
const accountSid = 'TWILIO_ACCOUNT_SID';
const authToken = 'TWILIO_AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'The flower that blooms from adversity is the rarest and most beautiful of all',
     from: '+12058392492',
     to: '+17605863618'
   })
  .then(message => console.log(message.sid));