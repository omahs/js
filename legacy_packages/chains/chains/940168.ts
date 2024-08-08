import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 940168,
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
  "name": "QR0726Y1TS",
  "nativeCurrency": {
    "name": "QR0726Y1TS Token",
    "symbol": "ZBO",
    "decimals": 18
  },
  "networkId": 940168,
  "redFlags": [],
  "rpc": [
    "https://940168.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-qr0726y1ts-d775c.avax-test.network/ext/bc/9gzbBqA9oM7wRDD1NoKZPqeoMvgaZUUZwoWoPykpGz3HQjong/rpc?token=14982a7773db53236118962029b6b1daf539a4a19dcc8c9b87e1c5b5707c172d"
  ],
  "shortName": "QR0726Y1TS",
  "slug": "qr0726y1ts",
  "testnet": true
} as const satisfies Chain;