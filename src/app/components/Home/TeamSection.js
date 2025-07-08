const team = [
    {
        name: 'Shivani Sharma',
        role: 'Managing Director & Proprietor',
        location: 'Nagpur, Maharashtra',
        since: 'Since 2003',
        image: '/images/team/shivani.jpg', // Replace with actual image
    },
    {
        name: 'S K Sharma',
        role: 'Director & Business Consultant',
        location: 'Nagpur, Maharashtra',
        since: 'Since 2003',
        image: '/images/team/sksharma.jpg',
    },
    {
        name: 'S K Chandershaker',
        role: 'Proprietor – Shri Madhav CFA',
        location: 'Nagpur',
        since: 'Since 2001',
        image: '/images/team/chandershaker.jpg',
    },
    {
        name: 'Rajeev Sen',
        role: 'Managing Director – RSMS Pest Services',
        location: 'Nagpur',
        since: 'Since 1995',
        image: '/images/team/rajeev.jpg',
    },
];

const TeamSection = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Meet the Team</h2>
                <p className="text-gray-600 mt-2">Leadership with decades of experience and dedication</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {team.map((member, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 shadow text-center">

                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-sm text-orange-600">{member.role}</p>
                        <p className="text-sm text-gray-500">{member.location}</p>
                        <p className="text-xs text-gray-400">{member.since}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
