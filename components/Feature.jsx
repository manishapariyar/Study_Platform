import { features } from '../data/features'
import { Card, CardContent } from '@/components/ui/card'

const Feature = () => {
  return (
    <div>
      <section className='w-full  bg-background py-10 mt-30'>
        <div className="container mx-auto px-4 text-center text-gray-200 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-wide">
            Why Choose Acadiora?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-indigo-400 mb-3 text-4xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Feature