import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 4227,
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
  "name": "Hashfire ",
  "nativeCurrency": {
    "name": "Hashfire  Token",
    "symbol": "HASHD",
    "decimals": 18
  },
  "networkId": 4227,
  "redFlags": [],
  "rpc": [
    "https://4227.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-hashfire-a407c.avax-test.network/ext/bc/XfhdpSFy9nmPCFbc4a4HqPmeXssc1Hne4X4ZNwWrFmJJiThPt/rpc?token=8b86f11ebc93e2060cd73c78bd725e728f0b0376b705e5ffa9555551f217bcf4"
  ],
  "shortName": "Hashfire ",
  "slug": "hashfire",
  "testnet": true
} as const satisfies Chain;