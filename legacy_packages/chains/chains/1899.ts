import type { Chain } from "../src/types";
export default {
  "chain": "ReDeFi",
  "chainId": 1899,
  "explorers": [
    {
      "name": "ReDeFi Scan",
      "url": "https://scanlayer2.redefi.world",
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
  "name": "ReDeFi Layer 2",
  "nativeCurrency": {
    "name": "RED",
    "symbol": "RED",
    "decimals": 18
  },
  "networkId": 1899,
  "rpc": [
    "https://1899.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://layer2.redefi.world"
  ],
  "shortName": "red",
  "slip44": 1899,
  "slug": "redefi-layer-2",
  "testnet": false
} as const satisfies Chain;