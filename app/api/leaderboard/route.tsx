import Leaderboard from '@/components/Leaderboard';
import { VERCEL_URL } from '@/lib/consts';
import getAllIndexedData from '@/lib/getIndexedData';
import getLeaderboard from '@/lib/getLeaderboard';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  console.time('Get Query Params');
  const queryParams = req.nextUrl.searchParams;
  const creator = queryParams.get('creator');
  console.timeEnd('Get Query Params');
  console.time('getIndexedData');
  const dataSet = await getAllIndexedData(creator);
  console.timeEnd('getIndexedData');
  console.time('getLeaderboard');
  const filtered = getLeaderboard(dataSet.response);
  console.timeEnd('getLeaderboard');

  const { ImageResponse } = await import('@vercel/og');
  return new ImageResponse(<Leaderboard leaderboard={filtered.slice(0, 5)} />);
}

const getTimeTaken = (start: [number, number], end: [number, number]) => {
  const NS_PER_SEC = 1e9;
  const diff = end[0] - start[0] + (end[1] - start[1]) / NS_PER_SEC;
  return diff;
};
