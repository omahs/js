import type { Chain } from "../src/types";
export default {
  "chain": "NEXA",
  "chainId": 29223,
  "explorers": [
    {
      "name": "NexaShell",
      "url": "https://nexa.sh",
      "standard": "none",
      "icon": {
        "url": "ipfs://bafkreigb5iwd233ih5w4zn67zoqafv4jisqgkzfccabye7bjntccs5yjee",
        "width": 1024,
        "height": 1024,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "icon": {
    "url": "ipfs://bafkreia42ym3rgzo7w5k445nr4wmji4ucxgw4pdhdo5lacczkk2fiahwni",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "infoURL": "https://nexa.sh/meta",
  "name": "Nexa MetaNet",
  "nativeCurrency": {
    "name": "Nexa",
    "symbol": "NEXA",
    "decimals": 18
  },
  "networkId": 29223,
  "rpc": [
    "https://29223.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://nexa.sh/metanet"
  ],
  "shortName": "nexameta",
  "slip44": 29223,
  "slug": "nexa-metanet",
  "testnet": false
} as const satisfies Chain;