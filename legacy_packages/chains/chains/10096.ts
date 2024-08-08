import type { Chain } from "../src/types";
export default {
  "chain": "MNV",
  "chainId": 10096,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.metanovaverse.com",
      "standard": "EIP3091"
    },
    {
      "name": "Cosmos Explorer (Ping)",
      "url": "https://ping.metanovaverse.com/metanovaverse",
      "standard": "none"
    }
  ],
  "faucets": [],
  "features": [],
  "infoURL": "https://metanovaverse.com/",
  "name": "MetaNova Verse",
  "nativeCurrency": {
    "name": "MNV",
    "symbol": "MNV",
    "decimals": 18
  },
  "networkId": 10096,
  "rpc": [
    "https://10096.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://web3.metanovaverse.com"
  ],
  "shortName": "mnv",
  "slug": "metanova-verse",
  "testnet": false
} as const satisfies Chain;