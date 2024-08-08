import type { Chain } from "../src/types";
export default {
  "chain": "Curtis",
  "chainId": 33111,
  "explorers": [],
  "faucets": [
    "https://curtis.hub.caldera.xyz/"
  ],
  "features": [],
  "icon": {
    "url": "https://cryptologos.cc/logos/apecoin-ape-ape-logo.png",
    "width": 2000,
    "height": 2000,
    "format": "png"
  },
  "infoURL": "https://apechain.com/",
  "name": "Curtis",
  "nativeCurrency": {
    "name": "ApeCoin",
    "symbol": "APE",
    "decimals": 18
  },
  "networkId": 33111,
  "parent": {
    "type": "L2",
    "chain": "Arbitrum Sepolia",
    "bridges": []
  },
  "redFlags": [],
  "rpc": [
    "https://33111.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://curtis.rpc.caldera.xyz/http"
  ],
  "shortName": "APE",
  "slug": "curtis",
  "testnet": true
} as const satisfies Chain;