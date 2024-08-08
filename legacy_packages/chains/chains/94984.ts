import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 94984,
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
  "name": "Borne Gaming",
  "nativeCurrency": {
    "name": "Borne Gaming Token",
    "symbol": "BORNE",
    "decimals": 18
  },
  "networkId": 94984,
  "redFlags": [],
  "rpc": [
    "https://94984.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-bornegfdn-b5ce4.avax-test.network/ext/bc/2Z4VS89jR4PEB8K1JADyfXnRNAdGKHe5hUADWDiZzgY2VM7UL7/rpc?token=2f931310b8ce2b1c06a397edb32fc8fb004f1f1b499d9c9a35676e8b88ec1979"
  ],
  "shortName": "Borne Gaming",
  "slug": "borne-gaming",
  "testnet": true
} as const satisfies Chain;