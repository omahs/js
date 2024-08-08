import type { Chain } from "../src/types";
export default {
  "chain": "MARS",
  "chainId": 110110,
  "explorers": [],
  "faucets": [],
  "icon": {
    "url": "ipfs://bafybeiaqvko45oh3bppsx57i73ajopgm2nsy4v6a22wwrbhbaoe5olwwlm",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "infoURL": "https://marscredit.xyz/",
  "name": "MARS Credit",
  "nativeCurrency": {
    "name": "Mars",
    "symbol": "MARS",
    "decimals": 18
  },
  "networkId": 110110,
  "redFlags": [],
  "rpc": [
    "https://110110.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://node99-production-dd5f.up.railway.app:443"
  ],
  "shortName": "mars",
  "slip44": 1,
  "slug": "mars-credit",
  "testnet": false
} as const satisfies Chain;