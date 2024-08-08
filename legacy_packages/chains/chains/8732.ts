import type { Chain } from "../src/types";
export default {
  "chain": "Bullions",
  "chainId": 8732,
  "explorers": [
    {
      "name": "Bullionscan",
      "url": "https://bullionscan.org",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://www.bullionsx.io",
  "name": "Bullions Smart Chain",
  "nativeCurrency": {
    "name": "Bullions",
    "symbol": "BLN",
    "decimals": 18
  },
  "networkId": 8732,
  "rpc": [
    "https://8732.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.bullionsx.org"
  ],
  "shortName": "bln",
  "slip44": 8732,
  "slug": "bullions-smart-chain",
  "testnet": false
} as const satisfies Chain;