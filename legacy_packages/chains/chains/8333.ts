import type { Chain } from "../src/types";
export default {
  "chain": "B3",
  "chainId": 8333,
  "contracts": {
    "l1Contracts": {
      "L1StandardBridgeProxy": "0x769547a723783FCA36BAaf1ECcf9dfdbF6d09F38",
      "L2OutputOracleProxy": "0x536cf1ABfD22E61a13753c0F08613aDdF4ca0595",
      "OptimismPortalProxy": "0x3a314A6a3c1470Bf2854960D3Ce9D2435c7Ba794",
      "AddressManager": "0xd79005b0f06b2C518893d2Ba31f94429e555b6b1",
      "L1CrossDomainMessenger": "0x39d484F0FC1b3bfAed7D54934FF5C8e5d47A6867",
      "L1CrossDomainMessengerProxy": "0x39d484F0FC1b3bfAed7D54934FF5C8e5d47A6867",
      "L1StandardBridge": "0x769547a723783FCA36BAaf1ECcf9dfdbF6d09F38",
      "L2OutputOracle": "0x536cf1ABfD22E61a13753c0F08613aDdF4ca0595",
      "OptimismPortal": "0x3a314A6a3c1470Bf2854960D3Ce9D2435c7Ba794"
    }
  },
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.b3.fun",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://Qme5W7SmKGv3gqciYFWuZvA4QKJAU2XKwSzC6cXLx7wGJu",
        "width": 390,
        "height": 221,
        "format": "svg"
      }
    }
  ],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "ipfs://Qme5W7SmKGv3gqciYFWuZvA4QKJAU2XKwSzC6cXLx7wGJu",
    "width": 390,
    "height": 221,
    "format": "svg"
  },
  "infoURL": "https://b3.fun",
  "name": "B3",
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 8333,
  "parent": {
    "type": " ",
    "chain": " ",
    "bridges": []
  },
  "redFlags": [],
  "rpc": [
    "https://8333.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://mainnet-rpc.b3.fun/http",
    "https://mainnet-rpc.b3.fun"
  ],
  "shortName": "B3",
  "slug": "b3",
  "stackInfo": {
    "parentChainId": 8453,
    "nativeTokenAddress": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  },
  "stackType": "optimism_bedrock",
  "testnet": false
} as const satisfies Chain;