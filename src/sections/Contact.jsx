import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "preetineelam012@gmail.com",
    href: "mailto:preetineelam012@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8424868259",
    href: "tel:+918424868259",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Malad, Mumbai, Maharashtra 400097",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I’ll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message:
          err?.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-56 w-56 sm:h-64 sm:w-64 rounded-full bg-highlight/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-secondary-foreground">
            Get In Touch
          </span>

          <h2 className="mt-4 mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            Have an idea, opportunity, or role in mind?  
            Drop a message — I actually reply.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Form */}
          <div className="glass rounded-2xl sm:rounded-3xl border border-primary/30 p-5 sm:p-8">
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <input
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg sm:rounded-xl border bg-surface px-4 py-3 text-sm sm:text-base"
              />

              <input
                required
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg sm:rounded-xl border bg-surface px-4 py-3 text-sm sm:text-base"
              />

              <textarea
                required
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-lg sm:rounded-xl border bg-surface px-4 py-3 text-sm sm:text-base min-h-[120px] sm:min-h-[160px]"
              />

              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full gap-2"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="h-5 w-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex gap-3 rounded-xl p-4 text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle />
                  ) : (
                    <AlertCircle />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              <h3 className="mb-6 text-lg sm:text-xl font-semibold">
                Contact Information
              </h3>

              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-4 rounded-xl p-4 transition hover:bg-surface"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="text-sm sm:text-base font-medium break-words">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass rounded-2xl sm:rounded-3xl border border-primary/30 p-5 sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium text-sm sm:text-base">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Actively seeking full-time roles, internships, and serious freelance work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
