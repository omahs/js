import type { Chain } from "../src/types";
export default {
  "chain": "The Binary Holdings",
  "chainId": 625,
  "explorers": [
    {
      "name": "Tracehawk",
      "url": "https://explorer.sepolia.thebinaryholdings.com",
      "standard": "none"
    }
  ],
  "faucets": [],
  "name": "Binary Sepolia",
  "nativeCurrency": {
    "name": "Test BNRY",
    "symbol": "BNRY",
    "decimals": 18
  },
  "networkId": 625,
  "rpc": [
    "https://625.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.testnet.thebinaryholdings.com"
  ],
  "shortName": "thebinaryholdings-sepolia",
  "slug": "binary-sepolia",
  "testnet": true
} as const satisfies Chain;