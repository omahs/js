import type { Chain } from "../src/types";
export default {
  "chain": "LAOS Sigma Testnet",
  "chainId": 62850,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://sigma.explorer.laosnetwork.io",
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
  "infoURL": "https://laosnetwork.io",
  "name": "LAOS Sigma Testnet",
  "nativeCurrency": {
    "name": "SIGMA",
    "symbol": "SIGMA",
    "decimals": 18
  },
  "networkId": 62850,
  "rpc": [
    "https://62850.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.laossigma.laosfoundation.io",
    "wss://rpc.laossigma.laosfoundation.io"
  ],
  "shortName": "laossigma",
  "slug": "laos-sigma-testnet",
  "testnet": true,
  "title": "LAOS Sigma Testnet"
} as const satisfies Chain;