import type { Chain } from "../src/types";
export default {
  "chain": "peaq",
  "chainId": 3338,
  "explorers": [
    {
      "name": "Subscan",
      "url": "https://peaq.subscan.io",
      "standard": "none"
    }
  ],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmQ7Jue8v2YXyhmDTkSbzCJxzZDa2v4GZZKViESdyswzrj",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "infoURL": "https://www.peaq.network",
  "name": "peaq",
  "nativeCurrency": {
    "name": "peaq",
    "symbol": "PEAQ",
    "decimals": 18
  },
  "networkId": 3338,
  "rpc": [
    "https://3338.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://peaq.api.onfinality.io/public",
    "https://peaq-rpc.dwellir.com",
    "https://peaq-rpc.publicnode.com",
    "https://evm.peaq.network"
  ],
  "shortName": "PEAQ",
  "slug": "peaq",
  "testnet": false
} as const satisfies Chain;