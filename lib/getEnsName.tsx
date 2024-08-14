import { normalize } from 'viem/ens';
import { ethPublicClient } from './publicClient';
import { AIRSTACK_API_URL } from './consts';

export const getEnsName = async (address: string) => {
  const ensName = await ethPublicClient.getEnsName({
    address: normalize(address as string) as any,
  });
  return ensName;
};

export const getEnsAddress = async (name: string) => {
  const ensAddress = await ethPublicClient.getEnsAddress({
    name: normalize(name) as any,
  });
  return ensAddress;
};

const query = ` query MyQuery($creator: String){
  Domains(
    input: {filter: {name: {_eq: $creator}}, blockchain: ethereum}
  ) {
      Domain {
        manager
      }
    }
  }`;

export const getEthAddressFromAirstack = async (creator: string) => {
  const variables = {
    creator,
  };
  const res = await fetch(AIRSTACK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${process.env.NEXT_PUBLIC_AIRSTACK_API_KEY}`,
    },
    body: JSON.stringify({ query, variables }),
  });
  const data = await res.json();
  return data?.data?.Domains?.Domain?.[0]?.manager;
};
