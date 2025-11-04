export declare global {
  interface Window {
    recaptchaVerifier: any; // Temporary workaround; Firebase types aren't perfect yet
  }
}
