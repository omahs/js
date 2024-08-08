import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 74843,
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
  "name": "TESTNet SecondTEST",
  "nativeCurrency": {
    "name": "TESTNet SecondTEST Token",
    "symbol": "BOC",
    "decimals": 18
  },
  "networkId": 74843,
  "redFlags": [],
  "rpc": [
    "https://74843.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-testnetsec-c65fd.avax-test.network/ext/bc/yqC44Ng8grjpgko6RJ16gpE2R9mJ3vQmrgfoHERnsTpQE98vQ/rpc?token=cfa5e817d91c819c70fcd0597ea4ca9b06377b8855aa876ed8923f5ab02957f0"
  ],
  "shortName": "TESTNet SecondTEST",
  "slug": "testnet-secondtest",
  "testnet": true
} as const satisfies Chain;