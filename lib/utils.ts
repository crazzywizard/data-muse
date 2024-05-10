import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { basePublicClient, optimismPublicClient, ethPublicClient } from './publicClient';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mapChainIdToClient = (chainId: number) => {
  switch (chainId) {
    case 1:
      return ethPublicClient;
    case 10:
      return optimismPublicClient;
    case 8453:
      return basePublicClient;
    default:
      throw new Error(`Unsupported chainId: ${chainId}`);
  }
};
export const mapChainIdToEndpoint = (chainId: number) => {
  switch (chainId) {
    case 1:
      return `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`;
    case 10:
      return `https://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`;
    case 8453:
      return `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`;
    default:
      throw new Error(`Unsupported chainId: ${chainId}`);
  }
};
