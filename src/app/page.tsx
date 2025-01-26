import CustomButton from "@/components/buttons/CustomButton";
import { Github, ArrowRight, Package, Puzzle, Workflow, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Next.js Starter Template
          </h1>
          <p className="text-xl text-muted-foreground">
            A production-ready template with modern tools and best practices
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <CustomButton size="lg" icon={Github}>
              Get Started
            </CustomButton>
            <CustomButton variant="customStatus" size="lg" icon={ArrowRight} iconPosition="right">
              Documentation
            </CustomButton>
          </div>
        </header>

        {/* Features Grid */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Package,
                title: "Modern Stack",
                description: "Next.js 14, TypeScript, and Tailwind CSS for robust development"
              },
              {
                icon: Puzzle,
                title: "Pre-built Components",
                description: "Customizable components built with Shadcn/ui"
              },
              {
                icon: Workflow,
                title: "Development Tools",
                description: "ESLint, Prettier, and Husky for code quality"
              },
              {
                icon: Palette,
                title: "Styling System",
                description: "Flexible theming with CSS variables and Tailwind"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-xl border bg-card transition-all hover:shadow-md hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Component Examples */}
        <section className="space-y-8 rounded-xl border bg-card p-8">
          <h2 className="text-2xl font-semibold">Component Examples</h2>
          <div className="flex flex-wrap gap-4">
            <CustomButton>Default Button</CustomButton>
            <CustomButton variant="secondary" size="lg">
              Secondary Large
            </CustomButton>
            <CustomButton 
              variant="destructive" 
              icon={Github}
              iconPosition="left"
            >
              With Icon
            </CustomButton>
          </div>
        </section>
      </div>
    </div>
  );
}