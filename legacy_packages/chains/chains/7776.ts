import type { Chain } from "../src/types";
export default {
  "chain": "PandaSea",
  "chainId": 7776,
  "explorers": [
    {
      "name": "Tracehawk",
      "url": "https://pandaseascan.com",
      "standard": "none"
    }
  ],
  "faucets": [],
  "name": "PandaSea Mainnet",
  "nativeCurrency": {
    "name": "PandaSea Coin",
    "symbol": "PANDA",
    "decimals": 18
  },
  "networkId": 7776,
  "rpc": [
    "https://7776.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc1.pandasea.io"
  ],
  "shortName": "pandaSea-mainnet",
  "slug": "pandasea",
  "testnet": false
} as const satisfies Chain;