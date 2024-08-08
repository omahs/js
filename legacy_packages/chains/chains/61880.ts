import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 61880,
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
  "name": "QIM2407041 TEST INTEROP 2",
  "nativeCurrency": {
    "name": "QIM2407041 TEST INTEROP 2 Token",
    "symbol": "PJW",
    "decimals": 18
  },
  "networkId": 61880,
  "redFlags": [],
  "rpc": [
    "https://61880.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-qim2407041-ubbc4.avax-test.network/ext/bc/WGrSsnbtgiCDDwASajQAcoaMyn52xh4a2S4YdeZQT5i2KnG59/rpc?token=60273823b4d4b892fe7f9d7196242868273d7379aadf0c8da4f5b970d741557e"
  ],
  "shortName": "QIM2407041 TEST INTEROP 2",
  "slug": "qim2407041-test-interop-2",
  "testnet": true
} as const satisfies Chain;