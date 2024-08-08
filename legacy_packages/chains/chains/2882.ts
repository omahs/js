import type { Chain } from "../src/types";
export default {
  "chain": "CHIPS",
  "chainId": 2882,
  "explorers": [],
  "faucets": [],
  "infoURL": "https://www.chips.ooo",
  "name": "Chips Network",
  "nativeCurrency": {
    "name": "IOTA",
    "symbol": "IOTA",
    "decimals": 18
  },
  "networkId": 2882,
  "rpc": [
    "https://2882.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://node.chips.ooo/wasp/api/v1/chains/iota1pp3d3mnap3ufmgqnjsnw344sqmf5svjh26y2khnmc89sv6788y3r207a8fn/evm"
  ],
  "shortName": "chips",
  "slug": "chips-network",
  "testnet": false
} as const satisfies Chain;