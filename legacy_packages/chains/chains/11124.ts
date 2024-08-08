import type { Chain } from "../src/types";
export default {
  "chain": "Abstract Testnet",
  "chainId": 11124,
  "explorers": [
    {
      "name": "Abstract Block Explorer",
      "url": "https://explorer.testnet.abs.xyz",
      "standard": "none"
    },
    {
      "name": "Abstract Block Explorer",
      "url": "https://explorer.testnet.abs.xyz/",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmRNdPDVPBcVrZU8QwEs25PhuGha7cUn7mq98RKGBK6rR8",
        "width": 400,
        "height": 400,
        "format": "jpg"
      }
    }
  ],
  "faucets": [
    "https://faucet.triangleplatform.com/abstract/testnet"
  ],
  "features": [],
  "icon": {
    "url": "ipfs://QmRNdPDVPBcVrZU8QwEs25PhuGha7cUn7mq98RKGBK6rR8",
    "width": 400,
    "height": 400,
    "format": "jpg"
  },
  "infoURL": "https://abs.xyz/",
  "name": "Abstract Testnet",
  "nativeCurrency": {
    "name": "Ethereum",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 11124,
  "parent": {
    "type": "L2",
    "chain": "zkEVM",
    "bridges": []
  },
  "redFlags": [],
  "rpc": [
    "https://11124.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://api.testnet.abs.xyz"
  ],
  "shortName": "ETH",
  "slug": "abstract-testnet",
  "testnet": true
} as const satisfies Chain;