import type { Chain } from "../src/types";
export default {
  "chain": "ETHEREUM",
  "chainId": 41455,
  "explorers": [
    {
      "name": "Aleph Zero EVM Block Explorer",
      "url": "https://explorer.alephzero.raas.gelato.cloud/",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmbeSYW2c5pXAyEUzj8UFRdJhp5oMQzRMPqAsxJAqbGiem",
        "width": 317,
        "height": 303,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "ipfs://QmbeSYW2c5pXAyEUzj8UFRdJhp5oMQzRMPqAsxJAqbGiem",
    "width": 317,
    "height": 303,
    "format": "png"
  },
  "infoURL": "https://raas.gelato.network/rollups/details/public/aleph-zero-evm",
  "name": "Aleph Zero EVM",
  "nativeCurrency": {
    "name": "AZERO",
    "symbol": "AZERO",
    "decimals": 18
  },
  "networkId": 41455,
  "parent": {
    "type": "L2",
    "chain": "Ethereum",
    "bridges": [
      {
        "url": "https://bridge.gelato.network/bridge/aleph-zero-evm"
      }
    ]
  },
  "redFlags": [],
  "rpc": [
    "https://41455.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.alephzero.raas.gelato.cloud",
    "wss://ws.alephzero.raas.gelato.cloud"
  ],
  "shortName": "AZERO",
  "slug": "aleph-zero-evm",
  "testnet": false
} as const satisfies Chain;