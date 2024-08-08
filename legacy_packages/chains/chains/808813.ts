import type { Chain } from "../src/types";
export default {
  "chain": "ETH",
  "chainId": 808813,
  "explorers": [
    {
      "name": "bobscout",
      "url": "https://bob-sepolia.explorer.gobob.xyz",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
        "width": 551,
        "height": 540,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmaX5iqQTrJD8TBuvoT97xPMG6LYamjPCPnZUUMh12jc99",
    "width": 297,
    "height": 378,
    "format": "png"
  },
  "infoURL": "https://gobob.xyz",
  "name": "BOB Sepolia",
  "nativeCurrency": {
    "name": "Sepolia Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 808813,
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://bob-sepolia.gobob.xyz/"
      }
    ]
  },
  "rpc": [
    "https://808813.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://bob-sepolia.rpc.gobob.xyz",
    "wss://bob-sepolia.rpc.gobob.xyz"
  ],
  "shortName": "bob-sepolia",
  "slug": "bob-sepolia",
  "status": "active",
  "testnet": false
} as const satisfies Chain;