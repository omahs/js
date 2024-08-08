import type { Chain } from "../src/types";
export default {
  "chain": "SLING",
  "chainId": 33401,
  "explorers": [
    {
      "name": "SlingShot Explorer",
      "url": "https://explore.slingshotdao.com",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmVhM3wHXdXkFEvW4x4vYqT7bx7gb5BQLWcLebHBeAzAXF",
        "width": 2000,
        "height": 2000,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "icon": {
    "url": "ipfs://QmVhM3wHXdXkFEvW4x4vYqT7bx7gb5BQLWcLebHBeAzAXF",
    "width": 2000,
    "height": 2000,
    "format": "png"
  },
  "infoURL": "https://slingshotdao.com",
  "name": "SlingShot",
  "nativeCurrency": {
    "name": "Sling",
    "symbol": "SLING",
    "decimals": 18
  },
  "networkId": 33401,
  "rpc": [
    "https://33401.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.slingshotdao.com"
  ],
  "shortName": "slingshot",
  "slug": "slingshot",
  "testnet": false
} as const satisfies Chain;