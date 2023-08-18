import { resolveAddress } from "../common/ens/resolveAddress";
import { getCompositePluginABI } from "../common/plugin/getCompositePluginABI";
import { SmartContract } from "../contracts/smart-contract";
import { NetworkInput } from "../core/types";
import { AddressOrEns } from "../schema/shared/AddressOrEnsSchema";
import { AbiSchema } from "../schema/contracts/custom";
import { SDKOptions } from "../schema/sdk-options";
import { getSignerAndProvider } from "../constants/urls";
import {
  cacheContract,
  getCachedContract,
  getCachedStorage,
  inContractCache,
} from "./utils/cache";
import type { ThirdwebStorage } from "@thirdweb-dev/storage";
import type { ContractInterface } from "ethers";
import { getAllDetectedExtensions } from "../common";

export type GetContractFromAbiParams = {
  address: AddressOrEns;
  abi: ContractInterface;
  network: NetworkInput;
  storage?: ThirdwebStorage;
  sdkOptions?: SDKOptions;
};

export async function getContractFromAbi(
  params: GetContractFromAbiParams,
): Promise<SmartContract> {
  const resolvedAddress = await resolveAddress(params.address);

  const [signer, provider] = getSignerAndProvider(
    params.network,
    params.sdkOptions,
  );
  const chainId = (await provider.getNetwork()).chainId;

  if (inContractCache(resolvedAddress, chainId)) {
    return getCachedContract(resolvedAddress, chainId) as SmartContract;
  }

  const parsedAbi =
    typeof params.abi === "string" ? JSON.parse(params.abi) : params.abi;
  const extensions = getAllDetectedExtensions(parsedAbi);
  const contract = new SmartContract(
    signer || provider,
    resolvedAddress,
    extensions,
    getCachedStorage(params.storage),
    await getCompositePluginABI(
      resolvedAddress,
      AbiSchema.parse(parsedAbi),
      provider,
      params.sdkOptions,
      getCachedStorage(params.storage),
    ),
    params.sdkOptions,
    chainId,
  );

  cacheContract(contract, resolvedAddress, chainId);
  return contract;
}
