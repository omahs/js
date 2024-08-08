import type { Chain } from "../src/types";
export default {
  "chain": "KAIA",
  "chainId": 1001,
  "explorers": [
    {
      "name": "Klaytnscope",
      "url": "https://baobab.klaytnscope.com",
      "standard": "EIP3091"
    },
    {
      "name": "Klaytnfinder",
      "url": "https://baobab.klaytnfinder.io",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://faucet.kaia.io"
  ],
  "features": [],
  "infoURL": "https://kaia.io/",
  "name": "Kaia Testnet Kairos",
  "nativeCurrency": {
    "name": "KAIA",
    "symbol": "KAIA",
    "decimals": 18
  },
  "networkId": 1001,
  "redFlags": [],
  "rpc": [
    "https://1001.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://public-en.kairos.node.kaia.io"
  ],
  "shortName": "kaia-kairos",
  "slip44": 1,
  "slug": "kaia-testnet-kairos",
  "testnet": true
} as const satisfies Chain;