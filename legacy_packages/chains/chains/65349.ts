import type { Chain } from "../src/types";
export default {
  "chain": "CRATD2C",
  "chainId": 65349,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer-testnet.cratd2csmartchain.io",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
        "width": 551,
        "height": 540,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "infoURL": "https://cratd2csmartchain.io",
  "name": "CratD2C Testnet",
  "nativeCurrency": {
    "name": "CRATD2C",
    "symbol": "CRAT",
    "decimals": 18
  },
  "networkId": 65349,
  "rpc": [
    "https://65349.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://cratd2c-testnet-node1.cratd2csmartchain.io/",
    "https://cratd2c-testnet-node2.cratd2csmartchain.io/"
  ],
  "shortName": "cratd2c-testnet",
  "slug": "cratd2c-testnet",
  "testnet": true
} as const satisfies Chain;