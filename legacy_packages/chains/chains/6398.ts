import type { Chain } from "../src/types";
export default {
  "chain": "Connext Sepolia",
  "chainId": 6398,
  "explorers": [
    {
      "name": "Connext Sepolia",
      "url": "https://connext-sepolia.blockscout.com",
      "standard": "none",
      "icon": {
        "url": "ipfs://QmQBuGUPQ4f7zREjdviV4itwJB6gCbYEMvfaiWqFMweTPm",
        "width": 128,
        "height": 128,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "name": "Connext Sepolia",
  "nativeCurrency": {
    "name": "ETH",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 6398,
  "rpc": [
    "https://6398.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.connext-sepolia.gelato.digital/"
  ],
  "shortName": "connext-sepolia",
  "slug": "connext-sepolia",
  "testnet": false
} as const satisfies Chain;