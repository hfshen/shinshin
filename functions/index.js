/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
// const cors = require('cors')({origin: true}); // 모든 출처에서의 요청을 허용
const cors = require('cors')({origin: 'http://hlint.kr'});

exports.myFunction = functions.https.onRequest((request, response) => {
  cors(request, response, () => { // CORS 미들웨어를 사용
    // 함수의 나머지 부분
    response.send("Hello from Firebase!");
  });
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
