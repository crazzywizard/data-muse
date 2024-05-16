const getSortedLeaderboard = (leaderboard: any[]) => {
  return leaderboard.sort((a: any, b: any) => {
    if (a.editions > b.editions) return -1;
    else if (a.editions < b.editions) return 1;
    return a.buyer.localeCompare(b.buyer);
  });
};
export default getSortedLeaderboard;
