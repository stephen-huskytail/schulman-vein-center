"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { LOCATIONS } from "@/lib/constants";
import { HONEYPOT_FIELD_NAME, SERVICES_LIST } from "@/lib/lead-form";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name").max(80, "Please enter a shorter name"),
  phone: z.string().min(10, "Please enter a valid phone number").max(25, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").max(254, "Please enter a valid email address"),
  location: z.string().min(1, "Please select a preferred location"),
  service: z.string().optional(),
  message: z.string().max(2000, "Please keep your note under 2,000 characters").optional(),
  website: z.string().optional(),
  formStartedAt: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
  title?: string;
  isCompact?: boolean;
  onSuccess?: () => void;
  className?: string;
  buttonText?: string;
  textareaRows?: number;
}

export default function LeadForm({
  title = "Request Your Free Consultation",
  isCompact = false,
  onSuccess,
  className = "bg-white rounded-2xl shadow-card p-6 md:p-8 border border-gray-100",
  buttonText = "Request Free Consultation",
  textareaRows = 8,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formStartedAt, setFormStartedAt] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      website: "",
      formStartedAt,
    },
  });

  useEffect(() => {
    const startedAt = Date.now().toString();
    setFormStartedAt(startedAt);
    setValue("formStartedAt", startedAt);
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      toast.success("Appointment request received! We'll contact you within 1 business day.");
      const nextStartedAt = Date.now().toString();
      setFormStartedAt(nextStartedAt);
      reset({ website: "", formStartedAt: nextStartedAt });
      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.error("Submission error:", err);
      toast.error(err.message || "Unable to send your request. Please call us directly.");
    }
  };

  if (submitted) {
    return (
      <div className={`${isCompact ? "bg-white/95 p-6" : "bg-white p-8 md:p-10"} rounded-2xl shadow-card text-center border border-green-100`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="font-heading font-bold text-[var(--sv-navy)] text-2xl mb-2">
          Request Received!
        </h3>
        <p className="text-gray-600 mb-6 text-sm">
          Thank you for reaching out to Schulman Vein and Laser Center. We'll contact you within 1 business day to confirm your appointment.
        </p>
        <button
          onClick={() => {
            const startedAt = Date.now().toString();
            setFormStartedAt(startedAt);
            setValue("formStartedAt", startedAt);
            setSubmitted(false);
          }}
          className="btn-outline-navy"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
      <h3 className={`font-heading font-bold text-[var(--sv-navy)] ${isCompact ? "text-lg mb-4" : "text-xl mb-6"}`}>
        {title}
      </h3>

      <div
        aria-hidden="true"
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor={`${HONEYPOT_FIELD_NAME}-${isCompact ? "compact" : "full"}`}>Website</label>
        <input
          id={`${HONEYPOT_FIELD_NAME}-${isCompact ? "compact" : "full"}`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register(HONEYPOT_FIELD_NAME)}
        />
      </div>
      <input type="hidden" value={formStartedAt} {...register("formStartedAt")} />

      <div className={`grid grid-cols-1 ${isCompact ? "" : "sm:grid-cols-2"} gap-4 mb-4`}>
        <div>
          <label className="form-label">Full Name *</label>
          <input
            {...register("name")}
            placeholder="Jane Smith"
            className="form-input"
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
        <div>
          <label className="form-label">Phone Number *</label>
          <input
            {...register("phone")}
            placeholder="(555) 555-5555"
            type="tel"
            className="form-input"
          />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label">Email Address *</label>
        <input
          {...register("email")}
          placeholder="jane@email.com"
          type="email"
          className="form-input"
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}
      </div>

      <div className={`grid grid-cols-1 ${isCompact ? "" : "sm:grid-cols-2"} gap-4 mb-4`}>
        <div>
          <label className="form-label">Preferred Location *</label>
          <select {...register("location")} className="form-select">
            <option value="">Select location…</option>
            {LOCATIONS.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.shortName}
              </option>
            ))}
          </select>
          {errors.location && <p className="form-error">{errors.location.message}</p>}
        </div>
        <div>
          <label className="form-label">Area of Concern</label>
          <select {...register("service")} className="form-select">
            <option value="">Select service…</option>
            {SERVICES_LIST.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={isCompact ? "mb-4" : "mb-6"}>
        <label className="form-label">Tell Us About Your Concerns</label>
        <textarea
          {...register("message")}
          rows={textareaRows}
          placeholder="Describe your vein concerns, how long you've had them, and any questions you'd like answered…"
          className="form-input resize-none"
        />
        {errors.message && <p className="form-error">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {buttonText}
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center mt-3">
        By submitting this form, you consent to being contacted by Schulman Vein and Laser Center. We never share your information.
      </p>
    </form>
  );
}
