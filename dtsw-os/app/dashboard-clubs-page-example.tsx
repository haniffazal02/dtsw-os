"use client";

/**
 * CLUBS PAGE (Dashboard)
 * File location: app/dashboard/clubs/page.tsx
 * Route: /dashboard/clubs
 * 
 * Student view of clubs they're part of or can join
 */
export default function ClubsPage() {
  const clubs = [
    {
      id: "ai-innovation",
      name: "AI & Innovation Club",
      pillar: "CLT",
      members: 145,
      role: "Member",
    },
    {
      id: "startup",
      name: "Startup & Entrepreneurship",
      pillar: "CLT",
      members: 98,
      role: "Member",
    },
    {
      id: "research",
      name: "Research Cell",
      pillar: "SCD",
      members: 76,
      role: "Admin",
    },
    {
      id: "industry",
      name: "Industry Lab",
      pillar: "IIPC",
      members: 52,
      role: null,
    },
  ];

  return (
    <div className="space-y-2xl">
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-md">Clubs</h1>
        <p className="text-text-secondary">
          Manage your club memberships and explore new communities
        </p>
      </div>

      {/* Filter/Search Bar */}
      <div className="flex gap-md">
        <input
          type="search"
          placeholder="Search clubs..."
          className="flex-1 px-lg py-md border border-border-primary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <select className="px-lg py-md border border-border-primary rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary">
          <option>All Pillars</option>
          <option>CLT</option>
          <option>SCD</option>
          <option>IIPC</option>
          <option>TALKS</option>
        </select>
      </div>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="p-lg bg-surface-primary border border-border-primary rounded-xl hover:shadow-card-hover transition-all group"
          >
            {/* Club Header */}
            <div className="flex items-start justify-between mb-lg">
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary mb-sm">
                  {club.name}
                </h3>
                <p className="text-xs text-text-tertiary">{club.pillar}</p>
              </div>
              <div className="px-md py-xs bg-brand-primary/10 text-brand-primary rounded-full text-xs font-medium">
                {club.members}
              </div>
            </div>

            {/* Members Count */}
            <p className="text-sm text-text-secondary mb-lg">
              {club.members} members
            </p>

            {/* Role Badge or Join Button */}
            <div className="flex gap-md">
              {club.role ? (
                <>
                  <button className="flex-1 px-lg py-md border border-border-primary text-text-primary font-medium rounded-lg hover:bg-surface-secondary transition-colors text-sm">
                    Visit
                  </button>
                  <span className="px-md py-md bg-brand-primary/10 text-brand-primary rounded-lg text-xs font-medium">
                    {club.role}
                  </span>
                </>
              ) : (
                <button className="w-full px-lg py-md bg-brand-primary text-text-inverse font-medium rounded-lg hover:bg-brand-dark transition-colors text-sm">
                  Join Club
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="p-lg bg-surface-secondary border border-border-primary rounded-xl text-center">
        <h3 className="font-semibold text-text-primary mb-sm">
          Didn't find what you're looking for?
        </h3>
        <p className="text-sm text-text-secondary mb-lg">
          Check out all available clubs or create a new one
        </p>
        <a
          href="/clubs"
          className="inline-block px-lg py-md bg-brand-primary text-text-inverse font-medium rounded-lg hover:bg-brand-dark transition-colors text-sm"
        >
          Browse All Clubs
        </a>
      </div>
    </div>
  );
}
