import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 1612,
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
  "name": "Pearling Path",
  "nativeCurrency": {
    "name": "Pearling Path Token",
    "symbol": "pearl",
    "decimals": 18
  },
  "networkId": 1612,
  "redFlags": [],
  "rpc": [
    "https://1612.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-pearl-c612f.avax-test.network/ext/bc/CcXVATAg76vM849mrPoTigwp48qhFiN9WCa51DBQXNGkBKZw7/rpc?token=3296aa3e491dd5d366815601cc95be7275cd293486b09fe082619750d7b38587"
  ],
  "shortName": "Pearling Path",
  "slug": "pearling-path",
  "testnet": true
} as const satisfies Chain;