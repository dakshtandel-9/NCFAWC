const team = [
    {
        name: 'Shivani Sharma',
        role: 'Managing Director & Proprietor',
        since: 'Since 2003',
        image: '/images/team/shivani.jpg', // Replace with real image
    },
    {
        name: 'S K Sharma',
        role: 'Director & Business Consultant',
        since: 'Since 2003',
        image: '/images/team/sksharma.jpg',
    },
    {
        name: 'S K Chandershaker',
        role: 'Proprietor – Shri Madhav CFA',
        since: 'Since 2001',
        image: '/images/team/chandershaker.jpg',
    },
    {
        name: 'Rajeev Sen',
        role: 'Managing Director – RSMS Pest Services',
        since: 'Since 1995',
        image: '/images/team/rajeev.jpg',
    },
];

const LeadershipTeam = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Meet the Leadership</h2>
                <p className="text-gray-600 mt-2">The team that drives NCFAWC forward with experience and commitment.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {team.map((member, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg shadow text-center hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-sm text-orange-600">{member.role}</p>
                        <p className="text-xs text-gray-500">{member.since}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LeadershipTeam;
