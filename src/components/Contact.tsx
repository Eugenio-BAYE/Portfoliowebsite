import { Linkedin, Github, Mail } from "lucide-react";

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
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/eugenio-baye",
      href: "https://www.linkedin.com/in/eugenio-baye/",
      buttonText: "Visit LinkedIn",
      buttonIcon: Linkedin
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Eugenio-BAYE",
      href: "https://github.com/Eugenio-BAYE",
      buttonText: "Visit GitHub",
      buttonIcon: Github
    }
  ];

  return (
    <section id="contact" className="py-20 bg-zinc-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16 text-center">
          <h2 className="text-emerald-400 text-4xl md:text-5xl font-bold">Let's Connect</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Feel free to reach out, always open to interesting conversations
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

      </div>
    </section>
  );
}
