import type { Chain } from "../src/types";
export default {
  "chain": "Photon",
  "chainId": 55551,
  "explorers": [
    {
      "name": "photon_testnet2_explorer",
      "url": "https://testnet2.photonchain.io",
      "standard": "none"
    }
  ],
  "faucets": [
    "https://photonchain.io/testnet2"
  ],
  "infoURL": "https://photonchain.io",
  "name": "Photon Aurora Testnet",
  "nativeCurrency": {
    "name": "Photon",
    "symbol": "PTON",
    "decimals": 18
  },
  "networkId": 55551,
  "rpc": [
    "https://55551.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc-test2.photonchain.io"
  ],
  "shortName": "pton",
  "slug": "photon-aurora-testnet",
  "testnet": true
} as const satisfies Chain;