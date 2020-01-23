const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert(
    {
      "type": "service_account",
      "project_id": "re-fb-twitter",
      "private_key_id": "065b70ea4187f28e7934fe4307f0c8a649996e28",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCWqVkcphl/ZENl\nhLQTyF823fI+wh7XG6GHNq2nTbOcZ/vvvUanrMlftfIu09GH61RbS624HYdivXvB\nkrli5Ddpfu3fR5o3T2CifM+qw0bW+EsJEk0u9eKUFddcVeyxFnU+uzL8c/dpRkbf\nxjgWoEN8tD9E6cJaR6KZMtidzewYwoaHIbXKn2xy2OFzzPqcICO+1gTiIzoAzkUu\nrsjNb+ksaYdDugpeiqK4pw2tMUs4oXqMFbq1q5JIg6SLRJMMnPKGqxV8I+a3I9SA\nfYHd5K57L2TEgq4GEQXy4Or+Y5U/2J+Kef4mMKwMgWa0fWy88yLJvOCTQ6qXV40B\nC5TldzxXAgMBAAECggEAOT8j0xTx/0vTqBFic1nhg/GViG8uVMH1AHGwTi/iHX4N\nZqze2ft3kNyLp2to5GJw7Te2TI070jL5gTYFJyRcQcOvEvYcDQQmTddq+RG2Kxyx\nNkMz/LIFZAtgh39GrotABZQP7YkK639+kqy4xzAiNJIwsDi6Vp99kwSU9nE2UrmS\nJUcnCGak3OO501gg31zSGV026hgGOXuoCribGc0N81v+aLM0kt6JAzt/68odqy54\nfBLiRC8j9/00D7PeTQ5jGQsedXRXNA2BzS74jolv3EKY4UmjvDOW08moxTeVKOTD\nB8NlR9IXl8eZYbkaHiysBrb3Xm3FePTLxIRQNtn/8QKBgQDJW7+kC3BTNE/zOpai\nXvjGhzDsDXZpqDQw2OH0Et1BpFCkJkji1kyF7p1OmR0beZkz0KimZEhkLF6QTinX\n3TkHuRRgdUSC15FPEiwxvp5pfW+pSFogBSxR3UXQPoNfuTDSImZxggWp6KJh06fL\njDXMp/VAIaM39yVrUUzpL/ZbhQKBgQC/i7d5j9YUK6y9YY16b7cmYV6SP4oVb01P\noMcod8pbCr1lF4uKh9xzadRrwO5xXMBRULPYbzoZNXFhAK1zmqsd8XG0A3OLBEQF\nuNJAS6o14d00XKd8PaLmIqLkJvFFP/1QjqTHWY9e4+pbR+ZY2FdqXrDNuXlsvOqN\nfibdRMR5KwKBgHxgGLraefJbELtbyCnZYe83GGfmVOskg8BcZw1dDZ/7P/h00XaU\nCkZ8QlyHRSxwaspPq6zDqtd9dJfMQBpfQlfb4ZNHPB9Zyh6+SeAcLztXyL4Wu9yl\ndV/HvtTHmFxrRpW1u/OG7bqqwIqOs0mOfLjCUkHfxTLPjSSB3nD3OEQFAn8zoHTT\nTvFkfmEQqjp3xaSXs6bJxFZzcIxl6e/D+IWSBFMH7FCwBe5lLSET6exaoaU0RYwz\nycbfBIiKnKQjhIyahXkgC84Yqg2rfSUuLzaxTy9P7ak202YUoUFGPTjKcXTVQZ0o\nHfuGl+eSss5jI+xrvxnoWRVhOYn+mQHgoahTAoGAHH0XpjuUKbitv5nQ32U4md+K\nkjsqj1e+R0osJMKCqgINrxm7czspLJsoJKeF/gCfTwRkeIa5hVqtoWJ1t2rtAxwX\nqIXGCqwuB3oA0XjT6+rBH16/jn2cvk4BWJ9c/eiuMWQLyn5twmNRz7HZ6o10oWDj\nEoDyVvhWKq+68hAjR1w=\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-dl0xv@re-fb-twitter.iam.gserviceaccount.com",
      "client_id": "110989075487985218038",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dl0xv%40re-fb-twitter.iam.gserviceaccount.com"
    }
  ),
  databaseURL: "https://re-fb-twitter.firebaseio.com",
  storageBucket: "re-fb-twitter.appspot.com"
});
const db = admin.firestore();

const fbConfig = require('../util/fbConfig');
const firebase = require('firebase');
firebase.initializeApp(fbConfig);


module.exports = { admin, db, firebase };