import type { Chain } from "../src/types";
export default {
  "chain": "Aleph Zero Testnet",
  "chainId": 2039,
  "explorers": [
    {
      "name": "Aleph Zero Testnet",
      "url": "https://test.azero.dev/#/explorer",
      "standard": "none",
      "icon": {
        "url": "ipfs://QmbeSYW2c5pXAyEUzj8UFRdJhp5oMQzRMPqAsxJAqbGiem",
        "width": 317,
        "height": 303,
        "format": "png"
      }
    },
    {
      "name": "Aleph Zero Testnet Explorer",
      "url": "https://aleph-zero.blockscout.com/",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmbeSYW2c5pXAyEUzj8UFRdJhp5oMQzRMPqAsxJAqbGiem",
        "width": 317,
        "height": 303,
        "format": "png"
      }
    }
  ],
  "faucets": [
    "https://faucet.test.azero.dev/"
  ],
  "features": [],
  "icon": {
    "url": "ipfs://QmbeSYW2c5pXAyEUzj8UFRdJhp5oMQzRMPqAsxJAqbGiem",
    "width": 317,
    "height": 303,
    "format": "png"
  },
  "infoURL": "https://testnet.alephzero.org",
  "name": "Aleph Zero Testnet",
  "nativeCurrency": {
    "name": "TZERO",
    "symbol": "TZERO",
    "decimals": 18
  },
  "networkId": 2039,
  "redFlags": [],
  "rpc": [
    "https://2039.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.alephzero-testnet.gelato.digital",
    "wss://rpc.alephzero-testnet.gelato.digital"
  ],
  "shortName": "aleph",
  "slug": "aleph-zero-testnet",
  "testnet": true
} as const satisfies Chain;