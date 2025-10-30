import { Linkedin, Github, MapPin, Mail } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "baye.eugenio.egnb@gmail.com",
      href: "mailto:baye.eugenio.egnb@gmail.com",
      buttonText: "Send Email",
      buttonIcon: Mail
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Eugenio-BAYE",
      href: "https://github.com/Eugenio-BAYE",
      buttonText: "Visit GitHub",
      buttonIcon: Github
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Montpellier, France",
      href: "https://www.google.com/maps/place/Montpellier,+France",
      buttonText: "View on Map",
      buttonIcon: MapPin
    }
  ];

  return (
    <section id="contact" className="py-20 bg-zinc-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16 text-center">
          <h2 className="text-emerald-400 text-4xl md:text-5xl font-bold">Let's Connect</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Seeking a <span className="text-emerald-400">5-6 month internship</span> from <span className="text-zinc-100">February to August 2026</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto items-start">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const ButtonIcon = contact.buttonIcon;
            
            return (
              <div key={index} className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all text-center">
                <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Icon className="text-emerald-400" size={24} />
                </div>
                <p className="text-zinc-400 text-sm mb-1">{contact.label}</p>
                <p className="text-zinc-100 break-words mb-4">{contact.value}</p>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 bg-emerald-400/10 text-emerald-400 px-4 py-2 rounded-lg hover:bg-emerald-400/20 border border-emerald-400/30 hover:border-emerald-400/50 hover:shadow-md hover:shadow-emerald-500/10 transition-all text-sm"
                >
                  <ButtonIcon size={16} />
                  {contact.buttonText}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-zinc-800/50 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-10 inline-block">
              <h3 className="text-zinc-100 text-xl mb-4">
                <span className="text-emerald-400">Available</span> for Internship
              </h3>
              <p className="text-zinc-400 mb-8 max-w-md text-lg leading-relaxed">
                <span className="text-zinc-200">Software/AI Engineering & Management</span>
              </p>
              <a 
                href="https://linkedin.com/in/eugénio-baye"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-400 text-zinc-950 px-8 py-4 rounded-lg hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all text-lg"
              >
                <Linkedin size={22} />
                Connect on LinkedIn
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}
