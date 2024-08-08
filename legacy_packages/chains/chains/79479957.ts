import type { Chain } from "../src/types";
export default {
  "chain": "SX",
  "chainId": 79479957,
  "explorers": [
    {
      "name": "SX Toronto L2 Explorer",
      "url": "https://explorerl2.toronto.sx.technology",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmSXLXqyr2H6Ja5XrmznXbWTEvF2gFaL8RXNXgyLmDHjAF",
        "width": 896,
        "height": 690,
        "format": "png"
      }
    }
  ],
  "faucets": [
    "https://faucet.toronto.sx.technology"
  ],
  "icon": {
    "url": "ipfs://QmSXLXqyr2H6Ja5XrmznXbWTEvF2gFaL8RXNXgyLmDHjAF",
    "width": 896,
    "height": 690,
    "format": "png"
  },
  "infoURL": "https://www.sx.technology",
  "name": "SX Toronto Rollup",
  "nativeCurrency": {
    "name": "SX Network",
    "symbol": "SX",
    "decimals": 18
  },
  "networkId": 79479957,
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111"
  },
  "rpc": [
    "https://79479957.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.sx-rollup-testnet.t.raas.gelato.cloud"
  ],
  "shortName": "SXR-Testnet",
  "slug": "sx-toronto-rollup",
  "testnet": true
} as const satisfies Chain;