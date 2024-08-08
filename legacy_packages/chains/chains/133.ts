import type { Chain } from "../src/types";
export default {
  "chain": "HashKey Chain Testnet",
  "chainId": 133,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://hashkeychain-testnet-explorer.alt.technology",
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
  "infoURL": "https://hashkey.cloud",
  "name": "HashKey Chain Testnet",
  "nativeCurrency": {
    "name": "HashKey EcoPoints",
    "symbol": "HSK",
    "decimals": 18
  },
  "networkId": 133,
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111"
  },
  "rpc": [
    "https://133.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://hashkeychain-testnet.alt.technology"
  ],
  "shortName": "HSKT",
  "slug": "hashkey-chain-testnet",
  "testnet": true,
  "title": "HashKey Chain Testnet"
} as const satisfies Chain;