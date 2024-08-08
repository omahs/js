import type { Chain } from "../src/types";
export default {
  "chain": "DTZ",
  "chainId": 42026,
  "contracts": {
    "l1Contracts": {
      "L1StandardBridgeProxy": "0xBbea8Cc549702F67cc082d2cAA9842Ba3767536B",
      "L2OutputOracleProxy": "0x88dBaaeCDa265241a1BABe4A0ce69ad4957da8a2",
      "OptimismPortalProxy": "0xb765Df9d2925a82678F4B7bc60eF5294c1604514",
      "AddressManager": "0x5416B7421c42B9218B29f688C47a46020c23cF0d",
      "L1CrossDomainMessenger": "0x55b6A23e45611e5856beC4b97c433908Ef84d8c5",
      "L1CrossDomainMessengerProxy": "0x4A2b7478B9646c06C3517E6f06e1232684143C00",
      "L1ERC721Bridge": "0x4BecC9C79D94af5CCFf4Ad186f7fF4E3927d5827",
      "L1ERC721BridgeProxy": "0xd1bA2aC05275228287deDb09E3210A1CcCE3e4cA",
      "L1StandardBridge": "0x5c94e4b101EF3bC8554890c7D33Fae938Be737c0",
      "L2OutputOracle": "0xC3B5Ddf3C1Bf4b6cF905533E0584288EF179E805",
      "OptimismMintableERC20Factory": "0xCD2Fe59FFcAEc5D82AeE1d68Ba247Fa4385772AD",
      "OptimismMintableERC20FactoryProxy": "0xc0302a0e7C682C36B13F2Cd64BffEC46d751408C",
      "OptimismPortal": "0x764b431e61972Ae785b504B373efb139F38A7694",
      "ProxyAdmin": "0x85519ecD4E4c59E62B68dB2082dB1F5c75da1E15",
      "SystemConfig": "0x157B6514c57D506A589b72F076d9F87b24E23Eac",
      "SystemConfigProxy": "0xa096dD38362bd2cE3C696474329989960722A7Fd"
    }
  },
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.donatuz.com",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmRfwNkpQ29BNtE9MMi8z4G6bUmnNNUqAjuz1eDpcbM1ZS",
        "width": 512,
        "height": 512,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "ipfs://QmRfwNkpQ29BNtE9MMi8z4G6bUmnNNUqAjuz1eDpcbM1ZS",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "name": "Donatuz",
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 42026,
  "redFlags": [],
  "rpc": [
    "https://42026.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.donatuz.com"
  ],
  "shortName": "DTZ",
  "slug": "donatuz",
  "stackInfo": {
    "parentChainId": 8453,
    "nativeTokenAddress": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  },
  "stackType": "optimism_bedrock",
  "testnet": false
} as const satisfies Chain;