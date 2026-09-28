import { esc, external, sectionLabel, buttonClasses, telHref } from './utils.js';
import { icon } from './icons.js';

const inputClasses =
  'mt-2 block w-full rounded-2xl border border-on-ink/20 bg-on-ink/5 px-5 py-3.5 text-base text-on-ink placeholder:text-on-ink/40 transition-colors focus:border-on-ink/60 focus:outline-none focus:ring-0';
const labelClasses = 'text-sm text-on-ink/80';

/** Details and booking on the left; the form sits in a dark rounded panel on the right. */
export function Contact({ contact, booking }) {
  const { form } = contact;
  const f = form.fields;
  const detail = (label, value) => `
        <div class="rounded-2xl bg-cream p-5">
          <dt class="text-xs uppercase tracking-[0.2em] text-muted">${esc(label)}</dt>
          <dd class="mt-2 text-ink">${value}</dd>
        </div>`;

  return `
<section id="contact" class="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-28" aria-labelledby="contact-heading">
  <div class="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-16">
    <div>
      ${sectionLabel(contact.label)}
      <h2 id="contact-heading" class="mt-5 font-heading text-5xl font-light leading-tight text-ink md:text-7xl">${esc(contact.heading)}</h2>
      <p class="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">${esc(contact.intro)}</p>
      <dl class="mt-10 grid gap-3 sm:grid-cols-2">
        ${detail(contact.detailsLabels.email, `<a href="mailto:${esc(contact.email)}" class="break-all hover:text-accent">${esc(contact.email)}</a>`)}
        ${detail(contact.detailsLabels.phone, `<a href="${esc(telHref(contact.phone))}" class="hover:text-accent">${esc(contact.phone)}</a>`)}
        <div class="rounded-2xl bg-cream p-5 sm:col-span-2">
          <dt class="text-xs uppercase tracking-[0.2em] text-muted">${esc(contact.detailsLabels.studio)}</dt>
          <dd class="mt-2 text-ink"><address class="not-italic">${esc(contact.address)}</address></dd>
        </div>
      </dl>
      <div class="mt-10 flex flex-wrap items-center gap-4">
        <p class="font-heading text-xl italic text-ink">${esc(contact.bookingHeading)}</p>
        <a href="${esc(booking.url)}" ${external} class="${buttonClasses.solid}">${esc(contact.bookingLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
      </div>
    </div>

    <form name="${esc(form.name)}" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" class="space-y-5 self-start rounded-[2rem] bg-ink p-6 sm:p-10 md:rounded-[2.5rem] md:p-12" data-contact-form>
      <input type="hidden" name="form-name" value="${esc(form.name)}" />
      <p class="hidden" aria-hidden="true">
        <label>${esc(form.honeypotLabel)} <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>
      <div>
        <label for="contact-name" class="${labelClasses}">${esc(f.name.label)}</label>
        <input id="contact-name" name="name" type="text" autocomplete="name" required class="${inputClasses}" placeholder="${esc(f.name.placeholder)}" />
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="contact-email" class="${labelClasses}">${esc(f.email.label)}</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required class="${inputClasses}" placeholder="${esc(f.email.placeholder)}" />
        </div>
        <div>
          <label for="contact-phone" class="${labelClasses}">${esc(f.phone.label)}</label>
          <input id="contact-phone" name="phone" type="tel" autocomplete="tel" class="${inputClasses}" placeholder="${esc(f.phone.placeholder)}" />
        </div>
      </div>
      <div>
        <label for="contact-message" class="${labelClasses}">${esc(f.message.label)}</label>
        <textarea id="contact-message" name="message" rows="5" required class="${inputClasses} resize-y" placeholder="${esc(f.message.placeholder)}"></textarea>
      </div>
      <button type="submit" class="w-full ${buttonClasses.solid} disabled:opacity-60" data-submit data-label="${esc(form.submitLabel)}" data-sending-label="${esc(form.sendingLabel)}">${esc(form.submitLabel)} ${icon('arrowRight', 'h-4 w-4')}</button>
      <p class="hidden rounded-2xl bg-on-ink/10 p-4 text-base text-on-ink" role="status" data-form-success>${esc(form.successMessage)}</p>
      <p class="hidden rounded-2xl bg-on-ink/10 p-4 text-base text-on-ink" role="alert" data-form-error>${esc(form.errorMessage)}</p>
    </form>
  </div>
</section>`;
}
