const LeaderboardHead = () => (
  <thead
    tw="text-2xl bg-opacity-80 mb-1 drop-shadow-2xl h-[70px] max-w-[100vw]"
    style={{
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
    }}
  >
    <tr
      className="bg-[#BCB4C5] font-helvetica font-bold text-lg rounded rounded-lg"
      tw="divide-y text-5xl divide-gray-200 dark:divide-gray-800 text-black flex justify-between w-full bg-[#BCB4C6] drop-shadow-2xl rounded rounded-lg"
      style={{
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      }}
    >
      <th
        className="px-4 py-3 text-left tracking-wider w-12"
        tw="px-4 py-3 text-left font-medium tracking-wider w-12"
      >
        rank
      </th>
      <th
        className="px-4 py-3 text-left tracking-wider"
        tw="px-4 py-3 text-left font-medium tracking-wider border border-[red]"
      >
        user
      </th>
      <th
        className="py-3 pr-5 text-left tracking-wider"
        tw="px-4 py-3 text-left font-medium tracking-wider"
      >
        {`spent(USD)`}
      </th>
    </tr>
  </thead>
);

export default LeaderboardHead;
