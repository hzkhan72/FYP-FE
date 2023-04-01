import { take, put, call, fork } from "redux-saga/effects";
import {
  contactUsForm,
  getSummaryRequest,
  getSummarySuccess,
} from "../slicers/general";
import { SAGA_ALERT_TIMEOUT, ALERT_TYPES } from "../../constants";
import {
  callRequest,
  CONTACT_US,
  GET_SUBSCRIPTIONS,
  GET_SUMMARY,
} from "../../config/webService";
import { toastAlert } from "../../services/utils";
import { getSubscriptionsRequest } from "../slicers/subscription";

// function* getSummary() {
//   while (true) {
//     // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
//     const { payload } = yield take(getSummaryRequest.type);
//     // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
//     const { payloadData, responseCallback } = payload;
//     try {
//       const response = yield call(
//         callRequest,
//         GET_SUMMARY,
//         [],
//         "",
//         `${payload}`,

//         {
//           "Content-Type": "application/json",
//           "Accept" : "application/json",
//           "Access-Control-Allow-Origin": "http://localhost:3001",
//           "Access-Control-Allow-Headers":
//             "Origin, Content-Type,  X-Requested-With, Accept",
//           "Access-Control-Allow-Credentials": "true",
//         }
//       );
//       console.log(response);
//       if (response) {
//         yield put(getSummarySuccess(response));
//         if (responseCallback) responseCallback(response);
//       } else {
//         if (responseCallback) responseCallback(response);
//         if (response.message) toastAlert(response.message, ALERT_TYPES.error);
//       }
//     } catch (err) {
//       if (responseCallback) responseCallback(err);
//     }
//   }
// }
export default function* root() {
  // yield fork(getSummary);
}
