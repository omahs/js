import type { Chain } from "../src/types";
export default {
  "chain": "GPT Protocol",
  "chainId": 1511670449,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.gptprotocol.io",
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
    "url": "ipfs://Qmdh4Lzamv34Ae2bhA9M6GLCjXxPAtHC5zdG5ZNidrdenA",
    "width": 1000,
    "height": 1000,
    "format": "jpg"
  },
  "infoURL": "https://gptprotocol.com",
  "name": "GPT Mainnet",
  "nativeCurrency": {
    "name": "GPT",
    "symbol": "GPT",
    "decimals": 18
  },
  "networkId": 1511670449,
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [
      {
        "url": "https://bridge.gptprotocol.io"
      }
    ]
  },
  "rpc": [
    "https://1511670449.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.gptprotocol.io"
  ],
  "shortName": "GPT",
  "slug": "gpt",
  "testnet": false
} as const satisfies Chain;