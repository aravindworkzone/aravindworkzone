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
        style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      />

      <div
        className="fixed z-50 top-1/2 left-1/2 w-full max-w-[520px] px-4"
        style={{ transform: "translate(-50%, -50%)", animation: "modalIn 0.25s ease both" }}
      >
        <div
          className="rounded-2xl p-8"
          style={{ background: "white", border: "1px solid #e4e2dd", boxShadow: "0 24px 80px rgba(0,0,0,0.14)", fontFamily: "'DM Sans', sans-serif" }}
        >
          <div className="flex justify-between items-start mb-7">
            <div>
              <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 22, fontWeight: 700, color: "#111110", letterSpacing: "-0.02em", marginBottom: 4 }}>
                Send a message
              </h3>
              <p style={{ fontSize: 13, color: "#6b6860" }}>I'll get back to you as soon as possible.</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors duration-150"
              style={{ background: "#f4f3ef", color: "#6b6860", fontSize: 16 }}
              onMouseEnter={e => e.currentTarget.style.background = "#e4e2dd"}
              onMouseLeave={e => e.currentTarget.style.background = "#f4f3ef"}
            >
              ✕
            </button>
          </div>

          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "#edf6f1" }}>
                <span style={{ fontSize: 24 }}>✓</span>
              </div>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#111110", marginBottom: 8 }}>Message sent!</p>
              <p style={{ fontSize: 14, color: "#6b6860", marginBottom: 24 }}>Thanks for reaching out. I'll reply soon.</p>
              <button onClick={onClose}
                className="px-6 py-2.5 rounded-lg border-none cursor-pointer text-[14px] font-semibold"
                style={{ background: "#111110", color: "#fafaf8" }}>
                Close
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Field label="Name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} />
              <Field label="Email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
              <div>
                <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#7d7a72", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
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
                    background: "#fafaf8", border: "1.5px solid #e4e2dd",
                    color: "#111110", fontFamily: "'DM Sans', sans-serif",
                  }}
                  onFocus={e => e.target.style.borderColor = "#1a56e8"}
                  onBlur={e => e.target.style.borderColor = "#e4e2dd"}
                />
              </div>

              {status === "error" && (
                <p style={{ fontSize: 13, color: "#dc2626" }}>Something went wrong. Try again or email me directly.</p>
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
      <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#7d7a72", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
        {label}
      </label>
      <input
        type={type} name={name} placeholder={placeholder}
        value={value} onChange={onChange}
        className="w-full px-4 py-3 rounded-lg text-[14px] outline-none transition-all duration-200"
        style={{ background: "#fafaf8", border: "1.5px solid #e4e2dd", color: "#111110", fontFamily: "'DM Sans', sans-serif" }}
        onFocus={e => e.target.style.borderColor = "#1a56e8"}
        onBlur={e => e.target.style.borderColor = "#e4e2dd"}
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
        background: disabled ? "#e4e2dd" : "#111110",
        color: disabled ? "#7d7a72" : "#fafaf8",
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
