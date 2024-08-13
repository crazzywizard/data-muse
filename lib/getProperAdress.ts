import { isAddress } from 'viem';
import { ethPublicClient } from './publicClient';

export const getProperAddress = async (creator: string) => {
  return !isAddress(creator) ? await ethPublicClient.getEnsAddress({ name: creator }) : creator;
};
