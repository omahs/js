import type { Chain } from "../src/types";
export default {
  "chain": "memecoin-2",
  "chainId": 71041,
  "contracts": {
    "l1Contracts": {
      "L1StandardBridgeProxy": "0x8838406998F198259271FF120999533078E3A94f",
      "L2OutputOracleProxy": "0xaA440DaC20Ba87BE0C685f68d117AeC3558a2D7e",
      "OptimismPortalProxy": "0xEb16fbd58802ecF80a2b5c14B8EA40703922D0Fa",
      "AddressManager": "0xFf6A19a16a034B9106a4Ffd0679C65201C55Ad61",
      "L1CrossDomainMessenger": "0x83a2086419E1e711DA7561253267657F0b6aeEb2",
      "L1CrossDomainMessengerProxy": "0x9A17b42ea87423FAC9f6217330B1E415d333D2e9",
      "L1ERC721Bridge": "0x1779E4239b649B922e6563811f9122Da85cca672",
      "L1ERC721BridgeProxy": "0xaC0E36889a336F717DB54a7967208A311e3BF2D2",
      "L1StandardBridge": "0x5507Bfbd54937e58538503f192265b728EB52388",
      "L2OutputOracle": "0x681060226B7B548Be1560e62693c801ee59eB73c",
      "OptimismMintableERC20Factory": "0xB50d6Ba07b460E86aCe90F8c6b66a7EF795BD42E",
      "OptimismMintableERC20FactoryProxy": "0x4Df83A8B9A2F6C4cf3f48d4C498a03FB65E69400",
      "OptimismPortal": "0x17c5818675060086D51a80829680858C4840eFED",
      "ProxyAdmin": "0x6A5692897DeE28AD0Bf5eCc1790b0FcD55b63294",
      "SystemConfig": "0x45c3f1C67a8b50E1cf0ade2CF9D6C1E143e0370a",
      "SystemConfigProxy": "0x1dF559ed254EC2D23F1Be351c078F857feB88F4f"
    }
  },
  "explorers": [
    {
      "name": "memecoin-2 Explorer",
      "url": "https://explorer-memecoin-2-7m5e84e2pz.t.conduit.xyz",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "features": [],
  "infoURL": "https://thirdweb.com/71041",
  "name": "memecoin-2",
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 71041,
  "redFlags": [],
  "rpc": [
    "https://71041.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc-memecoin-2-7m5e84e2pz.t.conduit.xyz"
  ],
  "shortName": "memecoin-2",
  "slug": "memecoin-2",
  "stackType": "optimism_bedrock",
  "testnet": true
} as const satisfies Chain;