import admin from 'firebase-admin'

const serviceAccount = {
  "type": "service_account",
  "project_id": "vehicle-freelance-project",
  "private_key_id": "06c277137a16686fbf413d56d02f02d9413fec0f",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDbQZ3XTxe9zuTb\nyOvyeyBr6iO7OQUNEQZm2HzV8Hqyz+n/9IyHnaZk7Uu5C/mJDVh2a0xUBkaoG/V7\ntap2DcQNsLij+2bdis28+Mt5953JbHm+S8HHd2fZSZGjnkqKbM92pdBnSf6IaS3Q\nuh0nTLUZXIHQ7X4mSP9+v9WTG0Hwibax7m8hTUPTb+4NXupnPk5Y+BG/iOAqn45R\nmHhejs/Ch9x8wzVWlrPIM6amS5TI7pE9Kmp/yme0W8R8GyxBo2JDFPAC4njDNmop\nI9pJijkk4Ibeoa5VV/aeW7ryLdakL0rel7HsdxKvm0d4Asabx8Wy2L+vAZ00COjF\nzto9/EnVAgMBAAECggEAT4uMOL+EpQOpKwXHeEbsWcpt4TBMIVPyZyCWlcVztmjR\nA9/UliT/Z7FhngZ2px7U382IuRk3zCislI+xgrf2z2K0ciW0yZ5givUWWS8ZKyj0\nODJi4Lt0zTOwJ1S3xWW5lNmOdNK3CgVirk2/YvEk6MkTfdmTwU8Nho4RbZffgeTA\nlk6/4oEH5gSPbxuLgbKK0VQb3IYnH/UFxLX1w18R3XNgefEfx/4czAHfXJcryxOr\nArlgvgyJO+WhxlRq7jVLevTUErcVasWMj/9Gm6KXa0pSHe+ErC9NH51GuVIF+6kb\n5dI0X35bqRFV4yXJfTeYaFtqFPcynpcBWaitkqf6xwKBgQDx2pV6hMd9pI7ERyi6\nzoIlcUvZtNaYrXbVMZBIGkhbPA1JCKEgpYLpx/QUzRE2U//VpX86KIvhPXVaYqI+\n7SSTTDFKnT0K1YthYW9BONcGBgrWt5RVpFtBs927NTM7X34sQ9cNS5qjF57G5z2/\npC0zYlGlW6664xXFS00wOGxNxwKBgQDoFKq70umiFMEHoAhHpbgqQ1O5M1NFLZ9F\nIWQ8PymoDj3qdpN97o1gfpdQ9kbe4dBHDsYTAG7OeBM5fhp7a4B5rURat5YVyVR/\nMcAv+Fv0Y1/bE9ptr0fmT2lnUKfQ+Mi0MhYHNVGGUA7RNyTQUzEaSmn+veyWJHb/\nGcasHL+bgwKBgQCLCYpdgO/efzfEBtSXcBjJxbRBWAD2jOJ/9ZpomRN3v7Izhk57\nIit8koLzYmC+xtOQ0y+tE5o2xsosR//WBSa9t1Ou/W4WSGV0ejsnV7HluJuKjMct\n5OrBftG9yfvF6kPy1p1O+2PO1slkt5N8FLoXjDI7ydVNgzcE0SFy0z0QCQKBgQCr\nRV0+oYczyxctNmgF4AHKhsdJvNvuCJ4qmVrsrzxhvqjo2Ds+y4bgOGwZHrbskz9u\nwTNiIIalrq2ZVzvZ61rz8O+p9yQ2zc6i06def231LEU4Wy1ultV73Q0PZtGCAae0\ne+YPycRxV7GnqodriomJOnOAwM7RevWqi2435DtvWwKBgDWqj1yN1eCoVc8L3JxB\nfF98Q7McseIZI/ylHVDEqXoApBoYFApkiWoi+BUocipu4+7WhZo2uAL8bEvL4RKj\nOKPZYnc/yGzaykAUpzxqfVDnqH5spbmCxi/affJIj8dVS9avmIioTHyXQv59igFs\nKKAQQ7yll1xKqqfe0bRix99K\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@vehicle-freelance-project.iam.gserviceaccount.com",
  "client_id": "107584046631619141465",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40vehicle-freelance-project.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

const db = admin.firestore();
export { db };