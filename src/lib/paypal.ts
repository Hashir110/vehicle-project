// import * as checkoutNodeJssdk from '@paypal/checkout-server-sdk';

// function environment(): checkoutNodeJssdk.core.SandboxEnvironment | checkoutNodeJssdk.core.LiveEnvironment {
//   const clientId = process.env.PAYPAL_CLIENT_ID;
//   const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
//   const mode = process.env.PAYPAL_ENV;

//   if (!clientId || !clientSecret || !mode) {
//     console.error("❌ Missing PayPal environment variables:", {
//       clientId,
//       clientSecret,
//       mode,
//     });
//     throw new Error("Missing PayPal credentials");
//   }

//   return mode === 'live'
//     ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
//     : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
// }

// function client(): checkoutNodeJssdk.core.PayPalHttpClient {
//   return new checkoutNodeJssdk.core.PayPalHttpClient(environment());
// }

// export default client;
