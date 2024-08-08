import type { Chain } from "../src/types";
export default {
  "chain": "Xprotocol Testnet",
  "chainId": 83144,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.testnet.xprotocol.org",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://xprotocol.org/faucets"
  ],
  "infoURL": "https://xprotocol.org/",
  "name": "Xprotocol Testnet",
  "nativeCurrency": {
    "name": "KICK Testnet Token",
    "symbol": "KICK",
    "decimals": 18
  },
  "networkId": 83144,
  "parent": {
    "type": "L2",
    "chain": "eip155-84532"
  },
  "rpc": [
    "https://83144.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.testnet.xprotocol.org"
  ],
  "shortName": "xprotocoltestnet",
  "slug": "xprotocol-testnet",
  "testnet": true
} as const satisfies Chain;