import type { Chain } from "../src/types";
export default {
  "chain": "LUMIA",
  "chainId": 994873017,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.lumia.org/",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmVhoGuDLmvaPe34YyTdDeScJ1C8J98MAP9tNi4p2A54YR",
        "width": 1280,
        "height": 1280,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "ipfs://QmVhoGuDLmvaPe34YyTdDeScJ1C8J98MAP9tNi4p2A54YR",
    "width": 1280,
    "height": 1280,
    "format": "png"
  },
  "name": "Lumia Prism",
  "nativeCurrency": {
    "name": "LUMIA",
    "symbol": "LUMIA",
    "decimals": 18
  },
  "networkId": 994873017,
  "parent": {
    "type": " ",
    "chain": " ",
    "bridges": [
      {
        "url": "https://bridge.lumia.org/"
      }
    ]
  },
  "redFlags": [],
  "rpc": [
    "https://994873017.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://mainnet-rpc.lumia.org"
  ],
  "shortName": "LUMIA",
  "slug": "lumia-prism",
  "testnet": false
} as const satisfies Chain;