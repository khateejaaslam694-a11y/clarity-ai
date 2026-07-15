import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  Layout,
  Zap,
  Shield,
  BarChart3,
  Users,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Clarity — Simple project management for focused teams" },
      {
        name: "description",
        content:
          "Clarity helps small teams plan work, track progress, and ship faster without the clutter of complex project management tools.",
      },
      {
        property: "og:title",
        content: "Clarity — Simple project management for focused teams",
      },
      {
        property: "og:description",
        content:
          "Clarity helps small teams plan work, track progress, and ship faster without the clutter of complex project management tools.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2 font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Layout className="h-4 w-4" />
            </div>
           Clarity AI
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-foreground">
              How it works
            </a>
            <a href="#pricing" className="hover:text-foreground">
              Pricing
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Start free trial</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                How it works
              </a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <hr className="border-border" />
              <a href="#" className="text-foreground">
                Log in
              </a>
              <a href="#" className="text-foreground">
                Start free trial
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 pt-2 pb-16 lg:px-8">
  <div className="grid items-center gap-10 lg:grid-cols-2">
    {/* Left Side */}
<div className="flex flex-col justify-center">
      <span className="inline-flex rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
        Designed for modern collaboration
      </span>

      <h1 className="mt-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Less complexity.
        <br />
        More clarity.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
        Bring your ideas, people, and projects together in one intelligent
        workspace designed to simplify collaboration and help every team do
        their best work.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button size="lg">
          Start Free
        </Button>

        <Button variant="outline" size="lg">
          Book a Demo
        </Button>
      </div>

      <p className="mt-5 text-sm text-muted-foreground">
        No credit card required • Setup in under 2 minutes
      </p>
    </div>

{/* Right Side */}
<div className="rounded-3xl border border-border bg-card p-8 shadow-xl">

  <div className="flex items-center justify-between border-b border-border pb-4">
    <div>
      <h3 className="text-xl font-semibold text-foreground">
        Clarity AI Workspace
      </h3>

      <p className="text-sm text-muted-foreground">
        Everything in one place
      </p>
    </div>

    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
      Live
    </span>
  </div>

  <div className="mt-6 space-y-5">

    {/* AI Assistant */}
    <div className="rounded-2xl border border-border bg-muted/40 p-5">
      <p className="text-sm font-semibold text-foreground">
        AI Assistant
      </p>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        I've organized today's priorities and found
        <span className="font-medium text-foreground">
          {" "}2 tasks{" "}
        </span>
        blocking your product launch.
      </p>
    </div>

    {/* Progress */}
    <div className="rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">
          Today's Progress
        </p>

        <span className="text-sm font-medium text-primary">
          87%
        </span>
      </div>

      <div className="mt-4 h-3 rounded-full bg-muted">
        <div className="h-3 w-[87%] rounded-full bg-primary"></div>
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        You're almost ready for launch.
      </p>
    </div>

    {/* Team */}
    <div className="rounded-2xl border border-border p-5">
      <p className="text-sm font-semibold">
        Team Activity
      </p>

      <div className="mt-4 space-y-3 text-sm">

        <div className="flex justify-between">
          <span>Sarah</span>
          <span className="text-muted-foreground">Designing</span>
        </div>

        <div className="flex justify-between">
          <span>Ali</span>
          <span className="text-muted-foreground">Reviewing</span>
        </div>

        <div className="flex justify-between">
          <span>Emma</span>
          <span className="font-medium text-green-600">
            Completed
          </span>
        </div>

      </div>
    </div>

    {/* Upcoming */}
    <div className="rounded-2xl border border-border p-5">
      <p className="text-sm font-semibold">
        Upcoming
      </p>

      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        <li>• Landing Page</li>
        <li>• Client Presentation</li>
        <li>• Product Launch</li>
      </ul>
    </div>

  </div>

</div>
  </div>
</section>

        <section id="features" className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Work smarter, not harder
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
               Everything your team needs to plan, collaborate, and deliver projects faster without the complexity of traditional project management tools.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Layout className="h-5 w-5" />}
                title="AI Task Planning"
                description="Let AI organize your tasks, deadlines, and priorities automatically."
              />
              <FeatureCard
                icon={<Zap className="h-5 w-5" />}
                title="Smart Priorities"
                description="Always know what deserves your attention first."
              />
              <FeatureCard
                icon={<Users className="h-5 w-5" />}
                title="Real-time Collaboration"
                description="Work together with comments, mentions, and instant updates."
              />
              <FeatureCard
                icon={<BarChart3 className="h-5 w-5" />}
                title="Live Analytics"
                description="Track team performance and project progress in real time."
              />
              <FeatureCard
                icon={<Shield className="h-5 w-5" />}
                title="Enterprise Security"
                description="Keep your workspace protected with enterprise-grade security."
              />
              <FeatureCard
                icon={<Check className="h-5 w-5" />}
                title="One-click Workspace"
                description="Create a workspace and invite your team in seconds."
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How Clarity AI helps your team move faster
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
  From planning to delivery, Clarity AI keeps your team aligned and productive every step of the way.
</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <StepCard
              step="01"
              title="Create your workspace"
              description="Set up your workspace in under a minute and invite your team."
            />
            <StepCard
              step="02"
              title="Let AI organize the work"
              description="Automatically prioritize tasks, deadlines, and project updates."
            />
            <StepCard
              step="03"
              title="Deliver with confidence"
              description="Track progress, collaborate in real time, and launch projects faster."
            />
          </div>
        </section>

        <section className="border-y border-border bg-gradient-to-b from-muted/20 to-background">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <div className="mb-6 text-center text-yellow-500 text-2xl">
  ★★★★★
</div>
            <blockquote className="text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
              “"Clarity AI didn't just organize our projects—it completely changed how our team collaborates. We spend less time managing work and more time delivering results."”
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-foreground">Emily Carter</p>
              <p className="text-sm text-muted-foreground">Head of Product, NovaLabs</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Simple pricing that grows with your team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose a plan that fits your workflow. Upgrade anytime as your team expands.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PricingCard
              name="Starter"
              price="$0"
              description="Perfect for individuals exploring AI-powered productivity."
              features={["Up to 3 projects", "2 team members", "Basic task boards"]}
              cta="Start Free"
              variant="outline"
            />
            <PricingCard
              name="Team"
              price="$12"
              period="/user/month"
              description="Built for growing teams that collaborate every day."
              features={[
                "Unlimited projects",
                "Unlimited team members",
                "Advanced progress tracking",
                "Priority support",
              ]}
              cta="Talk to Sales"
              variant="highlight"
            />
            <PricingCard
              name="Business"
              price="$29"
              period="/user/month"
              description="Advanced security, control, and dedicated support for enterprises."
              features={[
                "Everything in Team",
                "SSO and audit logs",
                "Custom workflows",
                "Dedicated account manager",
              ]}
              cta="Contact sales"
              variant="outline"
            />
          </div>
        </section>

        <section id="faq" className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Everything you need to know
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
  Have questions? Here are the answers to the ones we hear most often.
</p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="trial">
                <AccordionTrigger>Can I try Clarity AI before subscribing?</AccordionTrigger>
                <AccordionContent>
                  Yes. Every plan includes a 14-day free trial, so you can explore all premium features before making a decision.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="change-plan">
                <AccordionTrigger>Can I upgrade or downgrade anytime?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. You can switch plans whenever your team's needs change.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cancel">
                <AccordionTrigger>How do I cancel?</AccordionTrigger>
                <AccordionContent>
                  You can cancel your subscription from your workspace settings at any time. No
                  cancellation fees or hidden charges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="data">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Yes. Your data is encrypted in transit and at rest using enterprise-grade security standards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-background to-muted/40 p-10 text-center shadow-lg sm:p-14 lg:p-20">
            <h2 className="text-3xl font-semibold tracking-tight text-card-foreground sm:text-4xl">
              Ready to transform the way your team works?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Start your free trial today and experience a smarter, faster, AI-powered way to plan, collaborate, and deliver projects.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg">Start Free Today</Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <a href="/" className="flex items-center gap-2 font-semibold text-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Layout className="h-4 w-4" />
              </div>
              Clarity AI
            </a>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground">
                Security
              </a>
              <a href="#" className="hover:text-foreground">
                Support
              </a>
            </nav>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 2026 Clarity AI. Built for modern teams.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="rounded-2xl border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl">
      <CardContent className="flex h-full flex-col p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="relative rounded-2xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
  {step}
</span>
      <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  variant,
}: {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  variant: "outline" | "highlight";
}) {
  const isHighlight = variant === "highlight";

  return (
    <Card
      className={`flex flex-col border-border ${isHighlight ? "border-2 border-primary scale-105 shadow-xl bg-background shadow-sm" : "bg-background"}`}
    >
      <CardContent className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-semibold tracking-tight text-foreground">{price}</span>
          {period && <span className="ml-1 text-sm text-muted-foreground">{period}</span>}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <ul className="mt-6 flex-1 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          className="mt-8 w-full"
          variant={isHighlight ? "default" : "outline"}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}
