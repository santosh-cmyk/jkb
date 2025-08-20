import { useState } from "react";
import { Megaphone, Mic, MessageSquare, CheckCircle2, LineChart, Shield, Sparkles, PhoneCall, Globe } from "lucide-react";
import { motion } from "framer-motion";

// Simple UI atoms (shadcn-like minimal stand-ins for this single-file demo)
const Section = ({ id, title, kicker, children }: any) => (
  <section id={id} className="max-w-6xl mx-auto px-4 md:px-6 py-14">
    <div className="mb-8">
      {kicker && <p className="uppercase tracking-wide text-sm text-zinc-500 mb-2">{kicker}</p>}
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">{title}</h2>
    </div>
    <div className="grid gap-6">{children}</div>
  </section>
);

const Card = ({ children }: any) => (
  <div className="rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200/60 p-6">{children}</div>
);

const Pill = ({ icon: Icon, label }: any) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 bg-white">
    <Icon className="h-4 w-4" /> {label}
  </span>
);

export default function JKBConversationalAI() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800">
      {/* Nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-zinc-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
          <div className="flex items-center gap-3">
            <img src="https://dummyimage.com/36x36/111827/ffffff&text=P+" alt="Peopleplus.ai" className="h-9 w-9 rounded-xl"/>
            <img src="https://dummyimage.com/36x36/0f172a/ffffff&text=E" alt="EkStep" className="h-9 w-9 rounded-xl"/>
            <span className="font-semibold">Jan ki Baat (JKB)</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-zinc-900">About</a>
            <a href="#initiatives" className="hover:text-zinc-900">Initiatives</a>
            <a href="#framework" className="hover:text-zinc-900">Testing</a>
            <a href="#why-india" className="hover:text-zinc-900">Why India</a>
            <a href="#use-cases" className="hover:text-zinc-900">Use cases</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium bg-white border border-zinc-200 rounded-full px-3 py-1 shadow-sm">
                <Sparkles className="h-4 w-4" /> Conversational AI for Public Good
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-zinc-900">
                Jan ki Baat (JKB):
                <span className="block text-zinc-600">Voice‑first conversations that meet people where they are</span>
              </h1>
              <p className="mt-4 text-zinc-600 max-w-prose">
                Peopleplus.ai × EkStep are partnering to design, test, and deploy conversational AI—web, WhatsApp, and telephony—so last‑mile citizens can access services, benefits, and advice in their own language and style of speaking.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill icon={Mic} label="Voice Bots (Indic Languages)" />
                <Pill icon={MessageSquare} label="Multimodal (Web/WA/IVR)" />
                <Pill icon={Shield} label="Safe & Responsible AI" />
                <Pill icon={LineChart} label="Testing & Benchmarking" />
              </div>
              <div className="mt-8 flex gap-3">
                <a href="#initiatives" className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 text-white px-4 py-2 shadow">
                  <Megaphone className="h-4 w-4" /> Explore Initiatives
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-2">
                  <PhoneCall className="h-4 w-4" /> Get In Touch
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-100 shadow-inner grid place-items-center">
                <Mic className="h-20 w-20" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow p-3 border border-zinc-200">
                <div className="text-xs text-zinc-600">Telephony · WhatsApp · Web</div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* About */}
      <Section id="about" title="What is JKB?" kicker="About the initiative">
        <Card>
          <p className="text-zinc-700 leading-relaxed">
            Jan ki Baat (JKB) is a conversational AI program to collect feedback, deliver advisory, and help citizens complete tasks using natural speech. It focuses on Indic languages, low‑connectivity contexts, and culturally aware dialogue so that people can participate without needing to read or type.
          </p>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
              <Globe className="h-4 w-4 mb-2" /> 22+ official languages & hundreds of dialects
            </div>
            <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
              <Mic className="h-4 w-4 mb-2" /> Code‑mixing (e.g., Hinglish) & indirect speech
            </div>
            <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
              <PhoneCall className="h-4 w-4 mb-2" /> Works over simple phone calls (no data needed)
            </div>
            <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
              <Shield className="h-4 w-4 mb-2" /> Consent, privacy, and bias checks built‑in
            </div>
          </div>
        </Card>
      </Section>

      {/* Initiatives */}
      <Section id="initiatives" title="Peopleplus.ai × EkStep: What we’re building" kicker="Initiatives">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold mb-2">Citizen Conversations @ Scale</h3>
            <p className="text-sm text-zinc-600">Outbound & inbound calling to capture feedback and deliver timely guidance in agriculture, water, welfare, and more. Voice bots can match human engagement quality with IVR‑like scale and lower cost.</p>
            <ul className="mt-4 list-disc list-inside text-sm text-zinc-700 space-y-1">
              <li>Indic voice bots across Web/WhatsApp/Telephony</li>
              <li>Dialects, slang, pauses, and interruptions handled gracefully</li>
              <li>Structured data capture for insights and action</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-2">Evolve Lab: Safe Sandbox & Benchmarking</h3>
            <p className="text-sm text-zinc-600">A two‑phase testing flow (Quick Scan → Deep Audit) to validate bots before launch, then monitor in production with observability and audits.</p>
            <ul className="mt-4 list-disc list-inside text-sm text-zinc-700 space-y-1">
              <li>Safe & Responsible AI guardrails</li>
              <li>Human‑like conversation quality metrics</li>
              <li>Actionable dashboards, reports, and benchmarks</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Framework */}
      <Section id="framework" title="Testing & Benchmarking Framework" kicker="Quality you can trust">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center gap-2 mb-2"><Shield className="h-5 w-5" /><h4 className="font-medium">Safe & Responsible AI</h4></div>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>Consent & privacy checks</li>
              <li>Bias, abuse, and unsafe tone detection</li>
              <li>Cultural appropriateness</li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-2"><MessageSquare className="h-5 w-5" /><h4 className="font-medium">Human‑like Conversation</h4></div>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>Handles dialects, slang, noise & interruptions</li>
              <li>Empathy, natural tone, and context retention</li>
              <li>Low latency, avoids talking over users</li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-2"><LineChart className="h-5 w-5" /><h4 className="font-medium">Actionable Data & Fit‑for‑Purpose</h4></div>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>Structured data capture; completion & drop‑off rates</li>
              <li>Benchmarks across ASR → LLM → TTS pipeline</li>
              <li>Pre‑prod validation; prod audits & observability</li>
            </ul>
          </Card>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card>
            <h4 className="font-medium mb-2">Common Failure Modes We Test</h4>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>ASR: accent/name errors, noise robustness</li>
              <li>LLM: intent, logic, refusals/hallucinations</li>
              <li>TTS: pronunciation, pace, naturalness</li>
              <li>Dialogue: context loss, loops, over‑talking</li>
              <li>UX: latency, awkward silences</li>
              <li>Data: missed or malformed records</li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-medium mb-2">Two‑Phase Flow</h4>
            <ol className="text-sm text-zinc-700 list-decimal list-inside space-y-1">
              <li><strong>Quick Scan</strong> – high‑volume triage across 5 key parameters</li>
              <li><strong>Deep Audit</strong> – detailed error tagging (22+ issue types)</li>
            </ol>
          </Card>
        </div>
      </Section>

      {/* Why India */}
      <Section id="why-india" title="Why Conversational AI for India is Different" kicker="Context that matters">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h4 className="font-medium mb-2">Diversity at Scale</h4>
            <p className="text-sm text-zinc-700">Massive linguistic diversity, code‑switching, and varied formalities require bots to adapt to how people actually speak—not just translate words.</p>
            <ul className="mt-3 text-sm text-zinc-700 list-disc list-inside space-y-1">
              <li>22+ official languages; hundreds of dialects</li>
              <li>Hinglish & other code‑mixed patterns</li>
              <li>Relational address (e.g., “Priya ke papa”) & festival cues</li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-medium mb-2">Last‑mile Access</h4>
            <p className="text-sm text-zinc-700">Voice works for low literacy and low‑connectivity environments. JKB supports simple phone calls (no internet) and WhatsApp or web when available.</p>
            <ul className="mt-3 text-sm text-zinc-700 list-disc list-inside space-y-1">
              <li>Feature‑phone compatibility</li>
              <li>Low bandwidth, noisy settings</li>
              <li>Inclusive by design</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Use cases */}
      <Section id="use-cases" title="Illustrative Use Cases" kicker="From pilots to scale">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h4 className="font-medium mb-2">Citizen Feedback</h4>
            <p className="text-sm text-zinc-700">Capture water service feedback, welfare service experience, or grievance intent via natural conversation with structured handoff.</p>
            <ul className="mt-3 text-sm text-zinc-700 list-disc list-inside space-y-1">
              <li>Outbound surveys & inbound hotlines</li>
              <li>Dashboarding for program teams</li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-medium mb-2">Agriculture Advisory</h4>
            <p className="text-sm text-zinc-700">Provide timely, localized guidance to farmers (weather, soil, market, schemes) and enable actions through OAN‑integrated agents.</p>
            <ul className="mt-3 text-sm text-zinc-700 list-disc list-inside space-y-1">
              <li>Conversational access to DPI – OAN</li>
              <li>Multilingual models & domain glossaries</li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-medium mb-2">Citizen Support & Triage</h4>
            <p className="text-sm text-zinc-700">Route to human agents when needed; collect consent; maintain empathy and transparency.</p>
            <ul className="mt-3 text-sm text-zinc-700 list-disc list-inside space-y-1">
              <li>Safe escalation & audit trails</li>
              <li>Production observability</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA / Contact */}
      <Section id="contact" title="Partner with us" kicker="Get in touch">
        <Card>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <p className="text-sm text-zinc-700">We’re co‑building JKB with governments, NGOs, and ecosystem partners. If you’d like to pilot, evaluate vendors, or integrate your voice AI stack, let’s talk.</p>
              <ul className="mt-4 text-sm text-zinc-700 list-disc list-inside space-y-1">
                <li>Pre‑prod testing & benchmarks</li>
                <li>Production audits & observability</li>
                <li>Domain‑specific adaptation for Indic languages</li>
              </ul>
            </div>
            <form className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 grid gap-3">
              <div>
                <label className="text-xs text-zinc-500">Name</label>
                <input className="w-full mt-1 rounded-xl border border-zinc-300 px-3 py-2 bg-white" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-zinc-500">Email</label>
                <input className="w-full mt-1 rounded-xl border border-zinc-300 px-3 py-2 bg-white" placeholder="you@example.org" />
              </div>
              <div>
                <label className="text-xs text-zinc-500">How can we help?</label>
                <textarea className="w-full mt-1 rounded-xl border border-zinc-300 px-3 py-2 bg-white" rows={3} placeholder="Pilot, evaluation, integration…" />
              </div>
              <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 justify-center rounded-2xl bg-zinc-900 text-white px-4 py-2 shadow">
                <CheckCircle2 className="h-4 w-4" /> Submit
              </button>
              {open && (
                <p className="text-xs text-emerald-600">Thanks! This demo doesn’t send email, but we’ll wire it to your backend/CRM.</p>
              )}
            </form>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-sm text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Peopleplus.ai × EkStep · JKB</div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-zinc-700">About</a>
            <a href="#initiatives" className="hover:text-zinc-700">Initiatives</a>
            <a href="#framework" className="hover:text-zinc-700">Testing</a>
            <a href="#contact" className="hover:text-zinc-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
