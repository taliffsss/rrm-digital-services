import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Your Next.js Boilerplate
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Built with TypeScript, Tailwind CSS, and modern best practices
        </p>
        <div className="space-x-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  )
}