import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 47666,
  "explorers": [],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "https://images.ctfassets.net/9bazykntljf6/62CceHSYsRS4D9fgDSkLRB/877cb8f26954e1743ff535fd7fdaf78f/avacloud-placeholder.svg",
    "width": 256,
    "height": 256,
    "format": "svg"
  },
  "infoURL": "https://avacloud.io",
  "name": "QR0719T2TS",
  "nativeCurrency": {
    "name": "QR0719T2TS Token",
    "symbol": "CXM",
    "decimals": 18
  },
  "networkId": 47666,
  "redFlags": [],
  "rpc": [
    "https://47666.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-qr0719t2ts-yf696.avax-test.network/ext/bc/2sjvsEgvrVGodJy2QMmuS1sRo2HquPa8tAqS1NRcGu3NQZJe3g/rpc?token=07218e664691c5889d7c893a6e35d616bbe834bd078d99515f9edf75186270ef"
  ],
  "shortName": "QR0719T2TS",
  "slug": "qr0719t2ts",
  "testnet": true
} as const satisfies Chain;