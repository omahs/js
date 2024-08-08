import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 5456,
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
  "name": "QIE2408021",
  "nativeCurrency": {
    "name": "QIE2408021 Token",
    "symbol": "DJW",
    "decimals": 18
  },
  "networkId": 5456,
  "redFlags": [],
  "rpc": [
    "https://5456.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-qie2408021-d75c4.avax-test.network/ext/bc/BYicPtv7bJPKMdmD8VWPT5qeSTwq6pP3Jve4pWBCz7sz4ayXU/rpc?token=32c1ce1f09a80d3f85c8722b89bea8b17edf1c9d79aab9b664086005b0b66562"
  ],
  "shortName": "QIE2408021",
  "slug": "qie2408021",
  "testnet": true
} as const satisfies Chain;