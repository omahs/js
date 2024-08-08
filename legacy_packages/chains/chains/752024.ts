import type { Chain } from "../src/types";
export default {
  "chain": "Ternoa",
  "chainId": 752024,
  "explorers": [
    {
      "name": "Tracehawk",
      "url": "https://explorer.zkevm.ternoa.network",
      "standard": "none"
    }
  ],
  "faucets": [
    "https://faucet.zkevm.ternoa.network"
  ],
  "name": "Ternoa Testnet",
  "nativeCurrency": {
    "name": "Capsule Coin",
    "symbol": "CAPS",
    "decimals": 18
  },
  "networkId": 7502024,
  "rpc": [
    "https://752024.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.zkevm.ternoa.network"
  ],
  "shortName": "ternoa",
  "slug": "ternoa-testnet",
  "testnet": true
} as const satisfies Chain;