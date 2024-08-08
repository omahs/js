import type { Chain } from "../src/types";
export default {
  "chain": "CronosZkEVMMainnet",
  "chainId": 388,
  "explorers": [
    {
      "name": "Cronos zkEVM (Mainnet) Chain Explorer",
      "url": "https://explorer.zkevm.cronos.org",
      "standard": "none"
    }
  ],
  "faucets": [],
  "infoURL": "https://cronos.org/zkevm",
  "name": "Cronos zkEVM Mainnet",
  "nativeCurrency": {
    "name": "Cronos zkEVM CRO",
    "symbol": "zkCRO",
    "decimals": 18
  },
  "networkId": 388,
  "rpc": [
    "https://388.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://mainnet.zkevm.cronos.org"
  ],
  "shortName": "zkCRO",
  "slug": "cronos-zkevm",
  "testnet": false
} as const satisfies Chain;