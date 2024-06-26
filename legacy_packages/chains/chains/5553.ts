import type { Chain } from "../src/types";
export default {
  "chain": "Nahmii",
  "chainId": 5553,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.testnet.nahmii.io",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmZhKXgoGpzvthr2eh8ZNgT75YvMtEBegdELAaMPPzf5QT",
        "width": 384,
        "height": 384,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmZhKXgoGpzvthr2eh8ZNgT75YvMtEBegdELAaMPPzf5QT",
    "width": 384,
    "height": 384,
    "format": "png"
  },
  "infoURL": "https://nahmii.io",
  "name": "Nahmii 2 Testnet",
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 5553,
  "parent": {
    "type": "L2",
    "chain": "eip155-3",
    "bridges": [
      {
        "url": "https://bridge.nahmii.io"
      }
    ]
  },
  "rpc": [
    "https://5553.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://l2.testnet.nahmii.io"
  ],
  "shortName": "NahmiiTestnet",
  "slip44": 1,
  "slug": "nahmii-2-testnet",
  "status": "deprecated",
  "testnet": true
} as const satisfies Chain;