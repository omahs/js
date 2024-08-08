import type { Chain } from "../src/types";
export default {
  "chain": "ReDeFi",
  "chainId": 47803,
  "explorers": [
    {
      "name": "ReDeFi Scan",
      "url": "https://scanlayer1.redefi.world",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmQd2MWwDkGsH6JsHPAKXqy8o2kedYMzbnaEHoRpmvSiLW",
    "width": 350,
    "height": 350,
    "format": "png"
  },
  "infoURL": "https://redefi.world",
  "name": "ReDeFi Layer 1",
  "nativeCurrency": {
    "name": "BAX",
    "symbol": "BAX",
    "decimals": 18
  },
  "networkId": 47803,
  "rpc": [
    "https://47803.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://layer1.redefi.world"
  ],
  "shortName": "bax",
  "slip44": 47803,
  "slug": "redefi-layer-1",
  "testnet": false
} as const satisfies Chain;