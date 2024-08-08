import type { Chain } from "../src/types";
export default {
  "chain": "ZKasino",
  "chainId": 88800,
  "explorers": [
    {
      "name": "Tracehawk",
      "url": "https://explorer.zkas.zeeve.net",
      "standard": "none"
    }
  ],
  "faucets": [],
  "name": "ZKasino Mainnet",
  "nativeCurrency": {
    "name": "ZKAS",
    "symbol": "ZKAS",
    "decimals": 18
  },
  "networkId": 88800,
  "rpc": [
    "https://88800.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.zkas.zeeve.net"
  ],
  "shortName": "ZKasino",
  "slug": "zkasino",
  "testnet": false
} as const satisfies Chain;