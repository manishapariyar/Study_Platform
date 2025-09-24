import React from 'react'

const Statistics = () => {
  return (
    <div>    <section className="w-full py-12 md:py-24 ">
      <div className="container  px-8 md:px-6 flex items-center ml-25">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto ">

          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl font-bold">1000+</h3>
            <p className="text-muted-foreground">Interview Questions</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl font-bold">95%</h3>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="text-muted-foreground">AI Support</p>
          </div>
        </div>
      </div>
    </section></div>
  )
}

export default Statistics