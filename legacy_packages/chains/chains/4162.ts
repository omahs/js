import type { Chain } from "../src/types";
export default {
  "chain": "SX",
  "chainId": 4162,
  "explorers": [
    {
      "name": "SX L2 Explorer",
      "url": "https://explorerl2.sx.technology",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmSXLXqyr2H6Ja5XrmznXbWTEvF2gFaL8RXNXgyLmDHjAF",
        "width": 896,
        "height": 690,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmSXLXqyr2H6Ja5XrmznXbWTEvF2gFaL8RXNXgyLmDHjAF",
    "width": 896,
    "height": 690,
    "format": "png"
  },
  "infoURL": "https://www.sx.technology",
  "name": "SX Rollup",
  "nativeCurrency": {
    "name": "SX Network",
    "symbol": "SX",
    "decimals": 18
  },
  "networkId": 4162,
  "parent": {
    "type": "L2",
    "chain": "eip155-1"
  },
  "rpc": [
    "https://4162.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.sx-rollup.gelato.digital"
  ],
  "shortName": "SXR",
  "slug": "sx-rollup",
  "testnet": false
} as const satisfies Chain;