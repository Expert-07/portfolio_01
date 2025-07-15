import React, { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xblkrved', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen dark:bg-gradient-to-b from-[#000000] to-[#0f172b] py-20 px-20 text-center text-gray-900 dark:text-white relative z-10">
      {/*<Parallax speed={300}>*/}
        <h2 className="text-7xl font-bold font-orbitron mb-6">Contact Me</h2>
        <p className="mb-10 text-gray-600 dark:text-gray-400 animate-bounce">
          I’d love to hear from you! Whether you have a question, want to work together, or just want to say hi, feel free to drop me a message.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="relative p-3 rounded bg-black text-black dark:text-white font-mono"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="relative p-3 rounded bg-black text-black dark:text-white font-mono"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="15"
            name="message"
            className="relative p-3 rounded dark:bg-gradient-to-b from-black to-[#0f172b] text-black dark:text-white font-mono"
            required
          />
          <button type="submit" className="bg-blue-700 text-white py-3 rounded hover:bg-blue-600 relative transition-colors duration-300 font-mono">
            Send Message
          </button>

          {formStatus === 'sending' && <p className="text-blue-500">Sending...</p>}
          {formStatus === 'success' && <p className="text-green-500">Message sent successfully!</p>}
          {formStatus === 'error' && <p className="text-red-500">There was an error sending your message. Please try again.</p>}
        </form>
      {/*</Parallax>*/}
    </section>
  );
}
