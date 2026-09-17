'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <span className="subtitle">About Us</span>
          <h2>WELCOME TO PROSPERTY ADVISORS</h2>
          <p>
            <strong>Real Estate Advisors, Consultants & Portfolio Managers</strong>
          </p>

          <p>
            Welcome to Prosperty Real Estate Consultant in Chennai, your trusted partner in navigating the dynamic and
            ever-evolving world of real estate. Prosperty stands at the nexus of innovation, expertise, and unwavering
            dedication, reshaping the landscape of real estate in Chennai. With a rich tapestry of trust weaved over
            fifteen transformative years, we remain an emblem of excellence in the bustling property market of Chennai.
          </p>

          <p>
            Explore a suite of tailored services, crafted to mirror the unique aspirations of both individuals and
            businesses. Beyond traditional real estate advisories, Prosperty offers bespoke research solutions, ensuring
            a seamless journey for all property buying and selling ventures.
          </p>

          <p>
            Our Real Estate Consultants in Chennai take the time to understand your goals, preferences, and budget to
            provide you with tailored solutions that meet your specific needs. With expertise spanning Residential,
            Commercial, and Industrial segments, we commit to delivering a comprehensive and memorable experience for
            every client.
          </p>
        </div>

        <div className="about-image">
          <Image
            src="/indexassets/3d-rendering-isometric-fdgdf 1 (1).png"
            alt="3D Rendering - Prosperty Projects"
            width={600}
            height={450}
            priority
          />
        </div>
      </div>
    </section>
  )
}
