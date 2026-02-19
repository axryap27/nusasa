"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to backend / email service
    setSubmitted(true);
  }

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Contact</h1>
        <p className="text-muted-foreground">
          Questions, ideas, or just want to get involved? Reach out.
        </p>
      </section>

      <div className="grid gap-12 sm:grid-cols-2">
        {/* Form */}
        <section>
          {submitted ? (
            <div className="rounded-lg border bg-muted/40 p-6">
              <p className="font-medium">Message sent!</p>
              <p className="mt-1 text-sm text-muted-foreground">
                We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@u.northwestern.edu" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </section>

        {/* Connect */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Other Ways to Reach Us</h2>
          <Separator className="mb-6" />
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium">Email</p>
              <a
                href="mailto:nusasa@u.northwestern.edu"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                nusasa@u.northwestern.edu
              </a>
            </div>
            <div>
              <p className="font-medium">Instagram</p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                @nusasa
              </a>
            </div>
            <div>
              <p className="font-medium">GroupMe</p>
              <p className="text-muted-foreground">
                Join our GroupMe to stay in the loop on events and announcements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
