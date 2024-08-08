import type { Chain } from "../src/types";
export default {
  "chain": "MOVE",
  "chainId": 30732,
  "explorers": [
    {
      "name": "mevm explorer",
      "url": "https://explorer.testnet.imola.movementlabs.xyz",
      "standard": "none"
    }
  ],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmWRAor77N6VyjJiQgtsEE7h9Bd1Q7vtRveTYv2A6wZyAT",
    "width": 1546,
    "height": 1546,
    "format": "png"
  },
  "infoURL": "https://movementlabs.xyz",
  "name": "Movement EVM Testnet",
  "nativeCurrency": {
    "name": "Move",
    "symbol": "MOVE",
    "decimals": 18
  },
  "networkId": 30732,
  "rpc": [
    "https://30732.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://mevm.testnet.imola.movementlabs.xyz"
  ],
  "shortName": "movetest",
  "slug": "movement-evm-testnet",
  "status": "incubating",
  "testnet": true
} as const satisfies Chain;