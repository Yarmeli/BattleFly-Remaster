import TeamComponent from "@/components/aboutus/teamComponent";

function TeamPage() {
  const teamInfo = [
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/626b87ba7b5cf4edb6479868_image%209-p-500.jpeg",
      username: "Jyro",
      role: "Unity Lead",
    },
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/621c59ef7207c9f5b5d1713b_BF_fragments-24-p-500.jpeg",
      username: "Ben",
      role: "Founder",
      discord: "OfficialAbenger#6509",
      twitter: "benbeath",
    },
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/6218c02ea4c534a7d425ea5a_BF_fragments-02-p-500.jpeg",
      username: "Jean",
      role: "Creative director and lead game designer",
      discord: "Jean | Treasure#5267",
      twitter: "CurciJean",
    },
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/6218c13d266b386a6285b028_BF_fragments-16-p-500.jpeg",
      username: "Archetect",
      role: "Smart contract developer",
    },
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/6218c0efa4c53445b425ecd6_BF_fragments-11-p-500.jpeg",
      username: "Brian",
      role: "Ops lead",
      discord: "Big Dawg Woof#0362",
      twitter: "BigDawgWooof",
    },
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/6218c17ac4b74e6111e76261_BF_fragments-21-p-500.jpeg",
      username: "Kate",
      role: "Marketing and communication lead",
      discord: "draft101#0160",
      twitter: "draft_101",
    },
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/6218c1228f02499874cdcac7_BF_fragments-14-p-500.jpeg",
      username: "Matt",
      role: "APAC Partnerships Lead",
      discord: "MachuPichu888#0875",
      twitter: "machupichu888",
    },
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/6218c0b988c90281aa018c61_BF_fragments-08-p-500.jpeg",
      username: "Shuttlzworth",
      role: "North America Partnerships Lead",
      discord: "Shuttlzworth#2990",
      twitter: "shuttlzworth",
    },
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/6218c0d22822d0ac88e373b1_BF_fragments-09-p-500.jpeg",
      username: "Kirkland",
      role: "Product Lead",
      discord: "KirklandSignature#8502",
      twitter: "TheCostcoKid89",
    },
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/6218c11406eb095f7d80ee44_BF_fragments-13-p-500.jpg",
      username: "Jake",
      role: "Flywheel Ops",
      discord: "jakelgodfrey#0230",
      twitter: "jakelgodfrey",
    },
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/6218c0acf39a58c8edf64126_BF_fragments-07-p-500.jpeg",
      username: "0xLars",
      role: "Treasury Team",
      discord: "0xLars#6263",
      twitter: "lean_lars",
    },
    {
      imageUrl:
        "https://assets.website-files.com/61ecf535450144334de1e3e0/621c59ef7207c9f5b5d1713b_BF_fragments-24-p-500.jpeg",
      username: "Haxd",
      role: "Backend Lead",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="p-5 text-center text-3xl font-bold capitalize">
        Meet the the team behind BattleFly
      </h1>
      <div className="m-4 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamInfo.map((team) => (
          <TeamComponent
            key={team.username}
            imageUrl={team.imageUrl}
            username={team.username}
            role={team.role}
            discord={team.discord}
            twitter={team.twitter}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
