import type { Chain } from "../src/types";
export default {
  "chain": "Abyss Protocol Testnet",
  "chainId": 229772,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://testnet.abyssprotocol.ai",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
        "width": 551,
        "height": 540,
        "format": "png"
      }
    }
  ],
  "faucets": [
    "https://faucet.abyssprotocol.ai/"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "icon": {
    "url": "ipfs://Qmeaa9TSsdUuJtRRX9DWX3iuQ4bypTQfctGciuKsFkKL8C",
    "width": 558,
    "height": 495,
    "format": "png"
  },
  "infoURL": "https://abyssprotocol.ai/",
  "name": "Abyss Protocol",
  "nativeCurrency": {
    "name": "AbyssETH",
    "symbol": "aETH",
    "decimals": 18
  },
  "networkId": 229772,
  "rpc": [
    "https://229772.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet.rpc.abyssprotocol.ai/"
  ],
  "shortName": "abyss",
  "slug": "abyss-protocol",
  "testnet": true
} as const satisfies Chain;