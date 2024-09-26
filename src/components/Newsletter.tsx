import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Stay up-to-date with the latest E-Sports news, event updates, and
            exclusive content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-primary-foreground text-primary"
              required
            />
            <Button
              type="submit"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
