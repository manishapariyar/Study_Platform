import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,

} from "lucide-react";

const CTASection = () => {
  return (
    <section className="w-full m-auto">
      <div className="mx-auto py-24 gradient ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
            Ready to Shape Your Future with Acadiora?
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
            Empower your career journey with AI-powered tools for resumes, cover letters,
            and interview prep — all in one place. Join learners and professionals who
            trust Acadiora to build confidence, stand out, and succeed.
          </p>
          <Link href="/dashboard" passHref>
            <Button
              size="lg"
              variant="secondary"
              className="h-11 mt-5 animate-bounce"
            >
              Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
