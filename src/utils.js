import sb from "satoshi-bitcoin";

export const applyCORSToUrl = url => `${url}?format=json&cors=true`;
export const satoshiToBTC = satoshi => `${sb.toBitcoin(satoshi)} BTC`;
export const unixToDateString = unixTimestamp => new Date(unixTimestamp * 1000).toLocaleString();
