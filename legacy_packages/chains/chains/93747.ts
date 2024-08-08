import type { Chain } from "../src/types";
export default {
  "chain": "StratoVM",
  "chainId": 93747,
  "explorers": [
    {
      "name": "StratoVM Block Explorer",
      "url": "https://explorer.stratovm.io",
      "standard": "none"
    }
  ],
  "faucets": [],
  "infoURL": "https://www.stratovm.io/",
  "name": "StratoVM Testnet",
  "nativeCurrency": {
    "name": "SVM",
    "symbol": "SVM",
    "decimals": 18
  },
  "networkId": 93747,
  "rpc": [
    "https://93747.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.stratovm.io"
  ],
  "shortName": "stratovm",
  "slug": "stratovm-testnet",
  "testnet": true
} as const satisfies Chain;