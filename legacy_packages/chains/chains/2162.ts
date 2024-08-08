import type { Chain } from "../src/types";
export default {
  "chain": "Animechain",
  "chainId": 2162,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.kanda.animechain.ai",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://animechain.ai",
  "name": "Animechain Testnet",
  "nativeCurrency": {
    "name": "Coin",
    "symbol": "COIN",
    "decimals": 18
  },
  "networkId": 2162,
  "rpc": [
    "https://2162.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.kanda.animechain.ai"
  ],
  "shortName": "animechaint",
  "slug": "animechain-testnet",
  "testnet": true
} as const satisfies Chain;