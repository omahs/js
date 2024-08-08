import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 28029,
  "explorers": [],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "https://images.ctfassets.net/9bazykntljf6/62CceHSYsRS4D9fgDSkLRB/877cb8f26954e1743ff535fd7fdaf78f/avacloud-placeholder.svg",
    "width": 256,
    "height": 256,
    "format": "svg"
  },
  "infoURL": "https://avacloud.io",
  "name": "bg-testnet",
  "nativeCurrency": {
    "name": "bg-testnet Token",
    "symbol": "BLOCK",
    "decimals": 18
  },
  "networkId": 28029,
  "redFlags": [],
  "rpc": [
    "https://28029.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-bgtestnet-f985c.avax-test.network/ext/bc/2pY6nfj3GKvCr5pt77bH78TpomGak5RBut9NdrRBcC63QoWRvV/rpc?token=6c909ebd27b14e4a6f8032fdb3363e6f61309ee4043da92db68eb3268dc0b7d0"
  ],
  "shortName": "bg-testnet",
  "slug": "bg-testnet",
  "testnet": true
} as const satisfies Chain;