import React from "react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section
    id="contact"
    className="max-w-2xl mx-auto py-24 px-4 flex flex-col gap-6 scroll-mt-24"
  >
    <h2 className="text-3xl font-bold text-cyan-300 mb-2">Contact</h2>
    <form className="space-y-4">
      <input
        className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white"
        placeholder="Your Name"
      />
      <input
        className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white"
        placeholder="Your Email"
      />
      <textarea
        className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white"
        placeholder="Your Message"
        rows={4}
      />
      <Button
        type="submit"
        className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-8 py-2 rounded-lg"
      >
        Send
      </Button>
    </form>
  </section>
);

export default ContactSection;
