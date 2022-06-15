import crypto from "crypto-js";

export function encrypt(text: string, key: string): string {
  return crypto.AES.encrypt(text, key).toString();
}

export function decrypt(text: string, key: string): string {
  return crypto.AES.decrypt(text, key).toString(crypto.enc.Utf8);
}
