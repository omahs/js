import type { Chain } from "../src/types";
export default {
  "chain": "Henez",
  "chainId": 911111,
  "explorers": [
    {
      "name": "Henez Testnet explorer",
      "url": "https://henez-testnet.explorer.caldera.xyz/",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://Qme6V8JVAHtR774CiGJQxKSrEb3bGs5V3dkCqGy4PoQmKD",
        "width": 400,
        "height": 400,
        "format": "jpg"
      }
    }
  ],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "ipfs://Qme6V8JVAHtR774CiGJQxKSrEb3bGs5V3dkCqGy4PoQmKD",
    "width": 400,
    "height": 400,
    "format": "jpg"
  },
  "infoURL": "https://docs.henez.fi/",
  "name": "Henez",
  "nativeCurrency": {
    "name": "ETH",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 911111,
  "parent": {
    "type": "L2",
    "chain": "Arbitrum Orbit",
    "bridges": [
      {
        "url": "https://henez-testnet.bridge.caldera.xyz/"
      }
    ]
  },
  "redFlags": [],
  "rpc": [
    "https://911111.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://henez-testnet.rpc.caldera.xyz/http",
    "wss://henez-testnet.rpc.caldera.xyz/ws"
  ],
  "shortName": "ETH",
  "slug": "henez",
  "testnet": true
} as const satisfies Chain;