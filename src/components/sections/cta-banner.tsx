import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";

export function CtaBanner() {
  return (
    <section className="container-page py-8 sm:py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 px-8 py-16 text-center sm:px-16">
          <div className="absolute inset-0 bg-ink/10" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Got a project in mind?</h2>
            <p className="mx-auto mt-4 max-w-md text-white/85">
              I&apos;m always up for building something new — let&apos;s figure out if it&apos;s
              a fit.
            </p>
            <div className="mt-8 flex justify-center">
              <Magnetic>
                <Button href="/#contact" className="bg-white text-ink hover:shadow-none">
                  <MessageCircle className="h-4 w-4" />
                  Let&apos;s talk
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
