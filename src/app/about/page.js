import React from 'react'
import AboutHero from '../components/About/AboutHero'
import CompanyHistory from '../components/About/CompanyHistory'
import MissionVision from '../components/About/MissionVision'
import LeadershipTeam from '../components/About/LeadershipTeam'
import WhyChooseUs from '../components/About/WhyChooseUs'
import OurLocations from '../components/About/OurLocations'
import AboutCTA from '../components/About/AboutCTA'

export default function About() {
    return (
        <div>
            <AboutHero />
            <CompanyHistory />
            <MissionVision />
            <LeadershipTeam />
            <WhyChooseUs />
            <OurLocations />
            <AboutCTA />
        </div>
    )
}
