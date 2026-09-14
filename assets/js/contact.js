(() => {
 'use strict';
 const form = document.getElementById('project-inquiry');
 if (!form || !window.fetch || !window.FormData) return;
 const status = document.getElementById('inquiry-status');
 const required = [...form.querySelectorAll('[required]')];
 const button = form.querySelector('[type="submit"]');
 const label = button.innerHTML;
 const fields = [...form.querySelectorAll('.form-field input, .form-field textarea')];
 let sending = false;
 // If JavaScript is unavailable, native validation and the normal POST still work.
 form.noValidate = true;
 function showStatus(message, state) {
  status.textContent = message;
  status.dataset.state = state;
  status.hidden = false;
 }
 function validate(field) {
  const error = document.getElementById(field.getAttribute('aria-describedby'));
  let message = '';
  if (!field.value.trim()) message = field.name === 'name' ? 'Please enter your name.'
   : field.name === 'email' ? 'Please enter your email address.' : 'Tell us a little about your project.';
  else if (field.type === 'email' && !field.validity.valid) message = 'Please enter a valid email address.';
  field.setAttribute('aria-invalid', String(Boolean(message)));
  error.textContent = message;
  error.hidden = !message;
  return !message;
 }
 required.forEach(field => field.addEventListener('input', () => {
  if (field.getAttribute('aria-invalid') === 'true') validate(field);
  if (!sending) status.hidden = true;
 }));
 form.addEventListener('submit', async event => {
  event.preventDefault();
  if (sending) return;
  const invalid = required.map(validate).indexOf(false);
  if (invalid !== -1) { status.hidden = true; required[invalid].focus(); return; }
  if (form.elements.namedItem('_gotcha').value) {
   showStatus('We couldn’t submit this form. Please contact hello@proj0.io.', 'error');
   return;
  }
  sending = true;
  button.disabled = true;
  button.textContent = 'Sending…';
  form.setAttribute('aria-busy', 'true');
  showStatus('Sending your message…', 'sending');
  const data = new FormData(form);
  fields.forEach(field => { field.readOnly = true; });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
   const response = await fetch(form.action, { method: 'POST', body: data,
    headers: { Accept: 'application/json' }, signal: controller.signal });
   const result = await response.json().catch(() => null);
   if (response.ok && result?.ok === true && !result.errors) {
    form.reset();
    required.forEach(field => field.removeAttribute('aria-invalid'));
    showStatus('Thanks—your message has been submitted. We’ll be in touch.', 'success');
   } else {
    // Keep user-entered text intact on every failure, including provider validation errors.
    const errors = Array.isArray(result?.errors) ? result.errors : [];
    let firstInvalid;
    errors.forEach(error => {
     const field = required.find(input => input.name === error.field);
     if (!field || typeof error.message !== 'string') return;
     const text = document.getElementById(field.getAttribute('aria-describedby'));
     text.textContent = error.message;
     text.hidden = false;
     field.setAttribute('aria-invalid', 'true');
     firstInvalid ||= field;
    });
    showStatus(response.status === 429
     ? 'Too many attempts just now. Please wait a little, or email hello@proj0.io. Your message is still here.'
     : 'We couldn’t confirm your submission. Please check the form and try again, or email hello@proj0.io. Your message is still here.', 'error');
    firstInvalid?.focus();
   }
  } catch {
   showStatus('We couldn’t confirm delivery. Your message is still here. Check your connection before trying again, or email hello@proj0.io.', 'error');
  } finally {
   clearTimeout(timeout);
   sending = false;
   button.disabled = false;
   button.innerHTML = label;
   form.removeAttribute('aria-busy');
   fields.forEach(field => { field.readOnly = false; });
  }
 });
})();
