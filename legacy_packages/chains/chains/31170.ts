import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 31170,
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
  "name": "QR0708A1TS",
  "nativeCurrency": {
    "name": "QR0708A1TS Token",
    "symbol": "VQX",
    "decimals": 18
  },
  "networkId": 31170,
  "redFlags": [],
  "rpc": [
    "https://31170.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://subnets.avax.network/qr0708a1ts/testnet/rpc"
  ],
  "shortName": "QR0708A1TS",
  "slug": "qr0708a1ts",
  "testnet": true
} as const satisfies Chain;