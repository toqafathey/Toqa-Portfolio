import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { isHttpUrl } from '../../lib/seo';
import Reveal from '../layout/Reveal';

interface ContactItem {
  label: string;
  text: string;
  href?: string;
  external?: boolean;
  download?: boolean;
}

function buildItems(): ContactItem[] {
  const { email, linkedin, phone, location, cvPath } = siteConfig.contact;
  const items: ContactItem[] = [];
  if (email.trim()) items.push({ label: 'Email', text: email.trim(), href: `mailto:${email.trim()}` });
  if (linkedin.trim() && isHttpUrl(linkedin)) {
    items.push({ label: 'LinkedIn', text: 'View LinkedIn profile', href: linkedin.trim(), external: true });
  }
  if (phone.trim()) {
    items.push({ label: 'Phone', text: phone.trim(), href: `tel:${phone.replace(/[^+\d]/g, '')}` });
  }
  if (location.trim()) items.push({ label: 'Location', text: location.trim() });
  if (cvPath.trim()) items.push({ label: 'CV', text: 'Download CV', href: cvPath.trim(), download: true });
  return items;
}

export default function Contact() {
  const items = buildItems();

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative bg-ink py-28 text-ivory md:py-40">
      <div className="container-page grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6 text-champagne">
            <span aria-hidden="true" className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-champagne align-middle" />
            Contact
          </p>
          <h2 id="contact-title" className="text-5xl leading-[1] sm:text-6xl lg:text-7xl">
            Let&rsquo;s Create <span className="italic text-champagne">Something Meaningful.</span>
          </h2>
          <p className="mt-8 max-w-xl text-[1rem] leading-relaxed text-ivory/70">
            I&rsquo;m open to opportunities where creative thinking, content development, and digital marketing come
            together. If you&rsquo;re looking for a Social Media Specialist or Content Creator, I&rsquo;d love to connect.
          </p>
        </div>

        <div className="lg:col-span-5 lg:pt-14">
          <Reveal>
            {items.length > 0 ? (
              <ul className="border-t border-ivory/15">
                {items.map((item) => (
                  <li key={item.label} className="border-b border-ivory/15">
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        {...(item.download ? { download: true } : {})}
                        className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-champagne"
                      >
                        <span>
                          <span className="eyebrow block text-stone">{item.label}</span>
                          <span className="mt-1 block font-serif text-2xl">{item.text}</span>
                        </span>
                        <ArrowUpRight
                          size={20}
                          aria-hidden="true"
                          className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <div className="py-5">
                        <span className="eyebrow block text-stone">{item.label}</span>
                        <span className="mt-1 block font-serif text-2xl">{item.text}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="border border-dashed border-ivory/25 p-8">
                <p className="eyebrow text-champagne">Contact details</p>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-ivory/70">
                  Placeholder: professional email, LinkedIn, phone, location and CV link will appear here once they are
                  added in <code className="text-ivory">src/data/siteConfig.ts</code>.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
