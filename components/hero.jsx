import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="w-full mt-48 py-22">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-gray-200">
          Welcome to Acadiora
        </h1>

        <p className="text-lg md:text-2xl text-center mb-8 text-gray-300">
          Your Gateway to
          <span className="text-blue-400 font-semibold m-2">Career Success</span>
          by Building Resumes & Acing <br />
          Interviews with Chatbot Assistance.
        </p>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 text-xl">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" className="px-8 text-xl" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
