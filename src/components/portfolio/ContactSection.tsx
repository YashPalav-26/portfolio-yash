import { useRef, useState } from "react";
import ContactSvg from "./ContactSvg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/motion/Reveal";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn("EmailJS env vars are missing. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY to your .env.");
        setError(true);
        return;
      }

      if (!formRef.current) {
        setError(true);
        return;
      }

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setSuccess(true);
      toast({
        title: "Message sent",
        description: "Thanks! I’ll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setError(true);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again in a moment.",
      });
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-4 flex items-center">
<div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="section-title text-center">Contact Me</h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="w-full max-w-sm mx-auto">
              <ContactSvg />
            </div>
          </Reveal>

          <Reveal>
            <div className="neobrutalist-card p-8 relative overflow-hidden rounded-xl border border-primary/20 shadow-lg">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Visible inputs used by the user */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground/80">Name</Label>
                    <Input
                      id="name"
                      name="user_username"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="mt-2 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground/80">Email</Label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="mt-2 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground/80">Message</Label>
                  <Textarea
                    id="message"
                    name="user_message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className="mt-2 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40"
                    rows={5}
                    required
                  />
                </div>

                {/* Hidden mirrors to support common EmailJS template variable names */}
                <input type="hidden" name="user_name" value={name} />
                <input type="hidden" name="from_name" value={name} />
                <input type="hidden" name="reply_to" value={email} />
                <input type="hidden" name="from_email" value={email} />
                <input type="hidden" name="message" value={message} />

                <Button type="submit" className="w-full neobrutalist-button inline-flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <Send size={16} />
                </Button>
                {success && (
                  <p role="status" aria-live="polite" className="text-sm mt-2 rounded-md border border-green-500/30 bg-green-500/10 text-green-400 px-3 py-2">Your message has been sent!</p>
                )}
                {error && (
                  <p role="status" aria-live="polite" className="text-sm mt-2 rounded-md border border-red-500/30 bg-red-500/10 text-red-400 px-3 py-2">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;