import { createPublicClient, http } from 'viem';
import { base, mainnet, optimism, arbitrum, zora } from 'viem/chains';

export const ethPublicClient = createPublicClient({
  chain: mainnet,
  transport: http('https://eth-mainnet.g.alchemy.com/v2/bID30XgZClKSEMoPxM1QGYk93jxlOHSs'),
});

export const optimismPublicClient = createPublicClient({
  chain: optimism,
  transport: http('https://opt-mainnet.g.alchemy.com/v2/bID30XgZClKSEMoPxM1QGYk93jxlOHSs'),
});

export const basePublicClient = createPublicClient({
  chain: base,
  transport: http('https://base-mainnet.g.alchemy.com/v2/bID30XgZClKSEMoPxM1QGYk93jxlOHSs'),
});

export const arbitrumPublicClient = createPublicClient({
  chain: arbitrum,
  transport: http(),
});

export const zoraPublicClient = createPublicClient({
  chain: zora,
  transport: http(),
});
