import type { Chain } from "../src/types";
export default {
  "chain": "The Binary Holdings",
  "chainId": 624,
  "explorers": [
    {
      "name": "Tracehawk",
      "url": "https://explorer.thebinaryholdings.com",
      "standard": "none"
    }
  ],
  "faucets": [],
  "name": "Binary Mainnet",
  "nativeCurrency": {
    "name": "Binary Token",
    "symbol": "BNRY",
    "decimals": 18
  },
  "networkId": 624,
  "rpc": [
    "https://624.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.zero.thebinaryholdings.com"
  ],
  "shortName": "thebinaryholdings-mainnet",
  "slug": "binary",
  "testnet": false
} as const satisfies Chain;