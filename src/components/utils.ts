import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';

export const stringTrim = (string: string | null | undefined, maxLength: number) => {
  if (!string) return string;
  if (maxLength < 1) return string;
  if (string.length <= maxLength) return string;
  if (maxLength === 1) return string.substring(0,1) + '...';

  const midpoint = Math.ceil(string.length / 2);
  const toRemove = string.length - maxLength;
  const leftStrip = Math.ceil(toRemove/2);
  const rightStrip = toRemove - leftStrip;
  return `${string.substring(0, midpoint - leftStrip)}...${string.substring(midpoint + rightStrip)}`
}

export const decryptUrlParams = () => {
  // нижнее подчеркивание в ссылке, идентификатор части с зашифрованными данными
  const decodedStr = decodeURIComponent(window.location.href.split('_*')[1]);
  const rawStr = AES.decrypt(decodedStr, 'secretPassphrase').toString(enc.Utf8);

  // форматирование зависит от вида зашифрованой строки
  const replaceSpecial = `{${rawStr.replaceAll('&', ',').replaceAll('=', ':')}}`
  const addQuotes = replaceSpecial.replace(/(\w+)/gm, (matchedStr) => {
    return '"' + matchedStr + '"';
  });

  return JSON.parse(addQuotes)
}