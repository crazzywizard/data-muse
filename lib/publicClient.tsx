import { createPublicClient, http } from 'viem';
import { base, mainnet, optimism, arbitrum, zora } from 'viem/chains';

export const ethPublicClient = createPublicClient({
  chain: mainnet,
  transport: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`),
});

export const optimismPublicClient = createPublicClient({
  chain: optimism,
  transport: http(`https://opt-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`),
});

export const basePublicClient = createPublicClient({
  chain: base,
  transport: http(`https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`),
});

export const arbitrumPublicClient = createPublicClient({
  chain: arbitrum,
  transport: http(),
});

export const zoraPublicClient = createPublicClient({
  chain: zora,
  transport: http(),
});
