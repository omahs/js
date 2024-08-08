import type { Chain } from "../src/types";
export default {
  "chain": "Rivalz2",
  "chainId": 6966,
  "explorers": [
    {
      "name": "Rivalz2 explorer",
      "url": "https://rivalz2.explorer.caldera.xyz/",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmXBQYS7VkDAywMLmcAExm2SdZEo2WpFzKXEGjH3Q9hX5F",
        "width": 56,
        "height": 56,
        "format": "svg"
      }
    }
  ],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "ipfs://QmXBQYS7VkDAywMLmcAExm2SdZEo2WpFzKXEGjH3Q9hX5F",
    "width": 56,
    "height": 56,
    "format": "svg"
  },
  "infoURL": "https://docs.rivalz.ai/",
  "name": "Rivalz2",
  "nativeCurrency": {
    "name": "ETH",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 6966,
  "redFlags": [],
  "rpc": [
    "https://6966.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rivalz2.rpc.caldera.xyz/infra-partner-http"
  ],
  "shortName": "ETH",
  "slug": "rivalz2",
  "testnet": true
} as const satisfies Chain;