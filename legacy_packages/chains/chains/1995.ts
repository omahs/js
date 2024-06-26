import type { Chain } from "../src/types";
export default {
  "chain": "edeXa TestNetwork",
  "chainId": 1995,
  "explorers": [
    {
      "name": "edexa-testnet",
      "url": "https://explorer.testnet.edexa.network",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://faucet.edexa.com/"
  ],
  "icon": {
    "url": "ipfs://QmSgvmLpRsCiu2ySqyceA5xN4nwi7URJRNEZLffwEKXdoR",
    "width": 1028,
    "height": 1042,
    "format": "png"
  },
  "infoURL": "https://edexa.network/",
  "name": "edeXa Testnet",
  "nativeCurrency": {
    "name": "EDEXA",
    "symbol": "EDX",
    "decimals": 18
  },
  "networkId": 1995,
  "rpc": [
    "https://1995.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet.edexa.network/rpc",
    "https://io-dataseed1.testnet.edexa.io-market.com/rpc"
  ],
  "shortName": "edx",
  "slip44": 1,
  "slug": "edexa-testnet",
  "testnet": true
} as const satisfies Chain;