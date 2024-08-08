import type { Chain } from "../src/types";
export default {
  "chain": "Skopje Testnet",
  "chainId": 476462898,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://skopje-explorer.gptprotocol.io",
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
    "https://skopje-faucet.gptprotocol.io"
  ],
  "icon": {
    "url": "ipfs://Qmf75UpPd7PA3tV6iPxWXGmHq4azyP3CrBYStdSSjQ2Wrx",
    "width": 1170,
    "height": 1164,
    "format": "jpg"
  },
  "infoURL": "https://gptprotocol.com",
  "name": "Skopje Testnet",
  "nativeCurrency": {
    "name": "SkpGPT",
    "symbol": "SkpGPT",
    "decimals": 18
  },
  "networkId": 476462898,
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://skopje-bridge.gptprotocol.io"
      }
    ]
  },
  "rpc": [
    "https://476462898.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://skopje-rpc.gptprotocol.io"
  ],
  "shortName": "Skopje",
  "slug": "skopje-testnet",
  "testnet": true
} as const satisfies Chain;