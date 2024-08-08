import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 7997,
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
  "name": "QR0726T1TS",
  "nativeCurrency": {
    "name": "QR0726T1TS Token",
    "symbol": "TOP",
    "decimals": 18
  },
  "networkId": 7997,
  "redFlags": [],
  "rpc": [
    "https://7997.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-qr0726t1ts-e814c.avax-test.network/ext/bc/JKuP5FFaEVamTYavzAEDoMHBqoeB7EH8Xw5VxsviZfhpomgWr/rpc?token=45fd1a876dfe5f424b36975f1c51cfdc24a4beea18dcb8c26e9ce4613447d6ae"
  ],
  "shortName": "QR0726T1TS",
  "slug": "qr0726t1ts",
  "testnet": true
} as const satisfies Chain;