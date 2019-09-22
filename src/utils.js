import sb from "satoshi-bitcoin";

export const applyCORSToUrl = url => `${url}?format=json&cors=true`;
export const satoshiToBTC = satoshi => `${sb.toBitcoin(satoshi)} BTC`;
