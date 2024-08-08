import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 99920,
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
  "name": "QR0807T1TS",
  "nativeCurrency": {
    "name": "QR0807T1TS Token",
    "symbol": "FJZ",
    "decimals": 18
  },
  "networkId": 99920,
  "redFlags": [],
  "rpc": [
    "https://99920.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-qr0807t1ts-x1d97.avax-test.network/ext/bc/6CS8mrHgW8oMdfsktz5eZoXED5Zr3qrTV2LLpbMSQvbWLruk3/rpc?token=c1702c22b976e24099105a6e76ec9998773358ede83976981a656ecb2b55e08b"
  ],
  "shortName": "QR0807T1TS",
  "slug": "qr0807t1ts",
  "testnet": true
} as const satisfies Chain;