import type { Chain } from "../src/types";
export default {
  "chain": "ETH",
  "chainId": 11011,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://shape-sepolia-explorer.alchemy.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://shape.network",
  "name": "Shape Sepolia Testnet",
  "nativeCurrency": {
    "name": "Sepolia Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 11011,
  "rpc": [
    "https://11011.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://sepolia.shape.network"
  ],
  "shortName": "shapesep",
  "slip44": 1,
  "slug": "shape-sepolia-testnet",
  "testnet": true
} as const satisfies Chain;