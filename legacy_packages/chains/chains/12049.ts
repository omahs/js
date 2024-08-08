import type { Chain } from "../src/types";
export default {
  "chain": "memecoin-3",
  "chainId": 12049,
  "contracts": {
    "l1Contracts": {
      "L1StandardBridgeProxy": "0x0e6b3f08A931c71ef9a238e18114E2c6625Ad3DE",
      "L2OutputOracleProxy": "0xD49303FE77cFd0B4E6D0Fa62cF378b6bF2217945",
      "OptimismPortalProxy": "0xb3d789fF8D0FE67dEA6C8d03d6c0F28A661acad8",
      "AddressManager": "0xB3Bdaa8b0cf119bC6CDf899e2AF6b344839D51b1",
      "L1CrossDomainMessenger": "0x31249ebb7ca57dAcdaAA5BDEfa0d672750D529Bf",
      "L1CrossDomainMessengerProxy": "0xC1B0Da145f4e717e731A16DE313D3D07B970a9a0",
      "L1ERC721Bridge": "0x60c22819e3f71D2B4141a2E5E87565bC6c8C90E5",
      "L1ERC721BridgeProxy": "0x94eCdFb5Eb051B6C80a45A4eD861A18045E77D97",
      "L1StandardBridge": "0x9EEcC16E51e28BBFf94275645Db201A2cF9d8ce5",
      "L2OutputOracle": "0xa652A4bAF08feD0741D29Dcf49E9Af44eAfD1504",
      "OptimismMintableERC20Factory": "0xaD61B1E5659aE48eEd29fa9C1Ba8212a425D46dB",
      "OptimismMintableERC20FactoryProxy": "0xC76B33A1eD64Ef136c1c1F7aB891328B246c5AbE",
      "OptimismPortal": "0xEFD2B699aD8359098911a73ea080A569a692A41C",
      "ProxyAdmin": "0x72A0c4A23EF459fAa9C32484fcf6a05b1Cf830AC",
      "SystemConfig": "0x0f6932687101F309A45B560338D19c5A8F6f442C",
      "SystemConfigProxy": "0xc9c624f09378ab8095450194ea04CE521b235181"
    }
  },
  "explorers": [
    {
      "name": "memecoin-3 Explorer",
      "url": "https://explorer-memecoin-3-gy4apoe5lp.t.conduit.xyz",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "features": [],
  "infoURL": "https://thirdweb.com/12049",
  "name": "memecoin-3",
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 12049,
  "redFlags": [],
  "rpc": [
    "https://12049.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc-memecoin-3-gy4apoe5lp.t.conduit.xyz"
  ],
  "shortName": "memecoin-3",
  "slug": "memecoin-3",
  "stackType": "optimism_bedrock",
  "testnet": true
} as const satisfies Chain;