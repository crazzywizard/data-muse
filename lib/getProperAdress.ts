import { isAddress } from 'viem';
import { ethPublicClient } from './publicClient';
import { getEthAddressFromAirstack } from './getEnsName';

export const getProperAddress = async (creator: string) => {
  return !isAddress(creator) ? await getEthAddressFromAirstack(creator) : creator;
};
