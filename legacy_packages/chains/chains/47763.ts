import type { Chain } from "../src/types";
export default {
  "chain": "Neo X",
  "chainId": 47763,
  "explorers": [
    {
      "name": "Neo X - Explorer",
      "url": "https://xexplorer.neo.org",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmR3iCrjrW814fyv79UeVimDT4fTeBQcpYgMYxv1U6W15u",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "infoURL": "https://neo.org/",
  "name": "Neo X Mainnet",
  "nativeCurrency": {
    "name": "Gas",
    "symbol": "GAS",
    "decimals": 18
  },
  "networkId": 47763,
  "rpc": [
    "https://47763.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://mainnet-1.rpc.banelabs.org"
  ],
  "shortName": "neox-mainnet",
  "slug": "neo-x",
  "status": "active",
  "testnet": false
} as const satisfies Chain;