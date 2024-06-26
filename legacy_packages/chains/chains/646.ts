import type { Chain } from "../src/types";
export default {
  "chain": "Flow",
  "chainId": 646,
  "explorers": [
    {
      "name": "Flow Diver",
      "url": "https://previewnet.flowdiver.io",
      "standard": "none"
    }
  ],
  "faucets": [
    "https://previewnet-faucet.onflow.org"
  ],
  "icon": {
    "url": "ipfs://QmQFugEvsfU3ARjjJ7YRLJwSxMfTk54WWzrofekTRBKFaC",
    "width": 2000,
    "height": 2000,
    "format": "png"
  },
  "infoURL": "https://developers.flow.com/evm/about",
  "name": "Previewnet",
  "nativeCurrency": {
    "name": "FLOW",
    "symbol": "FLOW",
    "decimals": 18
  },
  "networkId": 646,
  "rpc": [
    "https://646.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://previewnet.evm.nodes.onflow.org"
  ],
  "shortName": "flow-previewnet",
  "slug": "previewnet",
  "testnet": false
} as const satisfies Chain;