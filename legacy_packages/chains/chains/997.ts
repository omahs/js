import type { Chain } from "../src/types";
export default {
  "chain": "5ireChain Testnet",
  "chainId": 997,
  "explorers": [
    {
      "name": "5ireChain Explorer",
      "url": "https://explorer.5ire.network",
      "standard": "none",
      "icon": {
        "url": "ipfs://QmaZDNDFLWESH4i3XqwEWfWBb1HPnQSNbDAr74nr2x8QAk",
        "width": 800,
        "height": 800,
        "format": "svg"
      }
    }
  ],
  "faucets": [
    "https://explorer.5ire.network/faucet"
  ],
  "icon": {
    "url": "ipfs://QmaZDNDFLWESH4i3XqwEWfWBb1HPnQSNbDAr74nr2x8QAk",
    "width": 800,
    "height": 800,
    "format": "svg"
  },
  "infoURL": "https://5ire.org",
  "name": "5ireChain Thunder",
  "nativeCurrency": {
    "name": "5ire Testnet Token",
    "symbol": "T5IRE",
    "decimals": 18
  },
  "networkId": 997,
  "rpc": [
    "https://997.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc-testnet.5ire.network"
  ],
  "shortName": "T5ire",
  "slug": "5irechain-thunder",
  "testnet": true
} as const satisfies Chain;