import type { Chain } from "../src/types";
export default {
  "chain": "TPC",
  "chainId": 2569,
  "explorers": [
    {
      "name": "tpcscan",
      "url": "https://tpcscan.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://techpay.io/",
  "name": "TechPay Mainnet",
  "nativeCurrency": {
    "name": "TechPay",
    "symbol": "TPC",
    "decimals": 18
  },
  "networkId": 2569,
  "rpc": [
    "https://2569.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://api.techpay.io/"
  ],
  "shortName": "tpc",
  "slug": "techpay",
  "testnet": false
} as const satisfies Chain;