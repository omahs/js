import type { Chain } from "../src/types";
export default {
  "chain": "Omni",
  "chainId": 164,
  "explorers": [
    {
      "name": "Omni EVM and cross-chain Explorer",
      "url": "https://omega.omniscan.network",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://docs.omni.network",
  "name": "Omni Omega",
  "nativeCurrency": {
    "name": "Omni",
    "symbol": "OMNI",
    "decimals": 18
  },
  "networkId": 164,
  "rpc": [
    "https://164.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://omega.omni.network"
  ],
  "shortName": "omni_omega",
  "slip44": 1,
  "slug": "omni-omega",
  "status": "active",
  "testnet": false
} as const satisfies Chain;