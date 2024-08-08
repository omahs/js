import type { Chain } from "../src/types";
export default {
  "chain": "SLING",
  "chainId": 97435,
  "explorers": [
    {
      "name": "SlingShot Test Explorer",
      "url": "https://explorer-dependent-emerald-whippet-gh6kch3nen.t.conduit.xyz",
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
  "name": "SlingShot Testnet",
  "nativeCurrency": {
    "name": "Sling Test",
    "symbol": "SLINGT",
    "decimals": 18
  },
  "networkId": 97435,
  "rpc": [
    "https://97435.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc-dependent-emerald-whippet-gh6kch3nen.t.conduit.xyz"
  ],
  "shortName": "sling",
  "slug": "slingshot-testnet",
  "testnet": true
} as const satisfies Chain;