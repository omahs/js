import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 59682,
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
  "name": "QR0726K1TS",
  "nativeCurrency": {
    "name": "QR0726K1TS Token",
    "symbol": "BXV",
    "decimals": 18
  },
  "networkId": 59682,
  "redFlags": [],
  "rpc": [
    "https://59682.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-qr0726k1ts-c603e.avax-test.network/ext/bc/M32JpVMAjr3YnDCmwSBSZPAkiApnd6A8UfdUAoSAbzAxvadic/rpc?token=984f594a7ad4039dfb0b3b35c9a84a98b8089d833df67cf093af5f11feb91363"
  ],
  "shortName": "QR0726K1TS",
  "slug": "qr0726k1ts",
  "testnet": true
} as const satisfies Chain;