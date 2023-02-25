import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    "type": "service_account",
    "project_id": "projeto-dmsa",
    "private_key_id": "d2aff66f2fb3bde3c217dd32548a83b077c90133",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQeJ6guJhRQVac\naMM4ibobVZVYKPASSSYjQyouUVWnqlENsY0G/yt6vcYkl4cABRT9YYDdSqE1bei1\nKe9O94IJBrap5huKXrGLLvx919R1v/+AxtudIZKAgEz0tYbXYXJXxZxCFbP8S0Iz\n9gJu4idic/gp5i2lKXucnx7B5iPm/uUmSKzlwOlfRhduRx76PpTPuJpFrsZzM87z\ne/s2jK+rcgS8o3Ppv+MfYTjzYOw47K2F4Xddfwsiy29Xs8OIYtEQGcfKQYlNkvKk\njSG6AWjdUTEXiZ6Kd2p0LwPbt9WKysF5jnx1e3Zmf9fMa8zWbHCvOzrg2/PtIxvA\ni8KHLVSJAgMBAAECggEACN9utkh6XdBPb2NwwPybqdjVUmXrpzDrKUpihot6VHiF\n7/SZRq2gRskXoIG9LTMKLFP0uCEaW2Z3e75ygQSSdEU6NmD6Kxl8qlUwSergZWKW\nl/80DwFZdZQAXSnyDe4H1SnZTLa/wlfcVCR/AK5/c/abnqzn+cTvjer31CjcvlK8\noW1ouxvCKMtX1kk+lub+dA/bJ9GjUEPhzqLiw0ffewU/zgt4luDeXJQfrVKxeHpT\nhHYmVrKIHRua+YViSEnbZqtW8RYlZM0tZ5nKGbyRJuT39t+Qo8pqa8qDB71mRR2z\nt1pYWhWlfpSSRcVvbU8W3XZLB7v+hJ3m6+sozp5WQQKBgQDuOZshU+fqFsCK5iNw\nWcncMIkVA62sTWyrFr7xVZ4StF4z5Z7JsXmSwNQhwXn8gVG90TtfmolEN/g22jS8\nHbb8jKTAjTPyrDrMbYZGOsbaHHoTcSe4mwk9s/mAwfb1wttadk+OvT+HeZ42pupG\nIyputqoPE/HjvcbhQrmKEiq/UwKBgQDgBq2Xg7rmZCl30u5e09QrIBMzyeK2HkPE\nq9lM3IeRcQOl89eDVcEu1Enir/irJKgHzTb3vrg2ECyLO2ILi9IpJVjbg1EIKinv\ncZgT9BfIryWJt81ichY7Wuwynl0zvcfsLYTzrSjhz5FGnytjsezxpSBMxuKi+Vsr\nZSfvmwYNMwKBgHNaJYnvzR6GwdkAMyzV7W7XealZTKFgJDx8GR1W7eH0wKC0kTzs\n2Qd8o7tsqhrgq6oURIG4nLsRtvkok9x7Lv3/RE+QkBTz3MzcQ+aB04QNwfbkFe3H\n9KOSIEB+q4y5O+oD2+YsMTTyaO/hxxMLOCLABHyklb5HSKQO4TTAMz7NAoGBAMpX\n/c8OYm/aJEJgOIFaHxbcn7t1K9qGt3saJOlxftl1FHB+MDgl6pkbkai4fIhIUaTK\nTE2067mZHkKb3lDDd41GeF283CHdw4bMOSo8nIbc+7DKXS4AEeiGlTSbKV+kmMDP\n1Hgr/PMIghUhixU/Dd6s4OG3+dhuFVS6xzl58htVAoGBAIG9mURj25iNvuGu6+BC\nwt5AbR/HsVrYadNjSOLObhX9+byfk4SadaAzRE6hwdF8G+F1ROw0Rw+sohPG1HjR\nWCtKAZ+gDJHCrPO3l2gEbXO8mudHdt9AdHL8ZbcDIz1nf4rWDK0uNOP143G6kV64\nZcJPy3DdHmJ6i/0hY7ZA5iY8\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-2yjq4@projeto-dmsa.iam.gserviceaccount.com",
    "client_id": "115389487830161290275",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2yjq4%40projeto-dmsa.iam.gserviceaccount.com"
}
  
const app = initializeApp(firebaseConfig)

module.exports = app