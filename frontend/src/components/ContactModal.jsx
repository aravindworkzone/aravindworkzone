import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        import.meta.env.VITE_PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50"
        style={{ background: "var(--overlay)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      />

      <div
        className="fixed z-50 top-1/2 left-1/2 w-full max-w-[520px] px-4"
        style={{ transform: "translate(-50%, -50%)", animation: "modalIn 0.25s ease both" }}
      >
        <div
          className="rounded-2xl p-8"
          style={{ background: "var(--card)", border: "1px solid var(--border)", boxShadow: "var(--shadow-card-hover)", fontFamily: "'DM Sans', sans-serif" }}
        >
          <div className="flex justify-between items-start mb-7">
            <div>
              <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 22, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 4 }}>
                Send a message
              </h3>
              <p style={{ fontSize: 13, color: "var(--muted)" }}>I'll get back to you as soon as possible.</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors duration-150"
              style={{ background: "var(--bg-alt)", color: "var(--muted)", fontSize: 16 }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--border)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--bg-alt)"}
            >
              ✕
            </button>
          </div>

          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "var(--green-soft)" }}>
                <span style={{ fontSize: 24 }}>✓</span>
              </div>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 18, fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>Message sent!</p>
              <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24 }}>Thanks for reaching out. I'll reply soon.</p>
              <button onClick={onClose}
                className="px-6 py-2.5 rounded-lg border-none cursor-pointer text-[14px] font-semibold"
                style={{ background: "var(--ink)", color: "var(--bg)" }}>
                Close
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Field label="Name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} />
              <Field label="Email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
              <div>
                <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "var(--muted-2)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="What's on your mind?"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg resize-none text-[14px] outline-none transition-all duration-200"
                  style={{
                    background: "var(--bg)", border: "1.5px solid var(--border)",
                    color: "var(--ink)", fontFamily: "'DM Sans', sans-serif",
                  }}
                  onFocus={e => e.target.style.borderColor = "var(--accent)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"}
                />
              </div>

              {status === "error" && (
                <p style={{ fontSize: 13, color: "var(--error)" }}>Something went wrong. Try again or email me directly.</p>
              )}

              <SubmitBtn onClick={handleSubmit} loading={status === "sending"} disabled={!form.name || !form.email || !form.message} />
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translate(-50%, -46%); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }
      `}</style>
    </>
  );
}

function Field({ label, name, type, placeholder, value, onChange }) {
  return (
    <div>
      <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "var(--muted-2)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
        {label}
      </label>
      <input
        type={type} name={name} placeholder={placeholder}
        value={value} onChange={onChange}
        className="w-full px-4 py-3 rounded-lg text-[14px] outline-none transition-all duration-200"
        style={{ background: "var(--bg)", border: "1.5px solid var(--border)", color: "var(--ink)", fontFamily: "'DM Sans', sans-serif" }}
        onFocus={e => e.target.style.borderColor = "var(--accent)"}
        onBlur={e => e.target.style.borderColor = "var(--border)"}
      />
    </div>
  );
}

function SubmitBtn({ onClick, loading, disabled }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full py-3 rounded-lg text-[14px] font-semibold border-none cursor-pointer transition-all duration-200"
      style={{
        background: disabled ? "var(--border)" : "var(--ink)",
        color: disabled ? "var(--muted-2)" : "var(--bg)",
        transform: hovered && !disabled ? "translateY(-1px)" : "none",
        boxShadow: hovered && !disabled ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {loading ? "Sending..." : "Send Message →"}
    </button>
  );
}
