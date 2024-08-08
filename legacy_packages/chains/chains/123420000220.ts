import type { Chain } from "../src/types";
export default {
  "chain": "Fluence Stage (Testnet)",
  "chainId": 123420000220,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockscout-123420000220.raas-testnet.gelato.digital",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://fluence.network/",
  "name": "Fluence Stage",
  "nativeCurrency": {
    "name": "tFLT",
    "symbol": "tFLT",
    "decimals": 18
  },
  "networkId": 123420000220,
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111"
  },
  "rpc": [
    "https://123420000220.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc-123420000220.raas-testnet.gelato.digital/",
    "wss://ws-123420000220.raas-testnet.gelato.digital/"
  ],
  "shortName": "fluence-stage",
  "slug": "fluence-stage",
  "testnet": true
} as const satisfies Chain;