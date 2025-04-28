import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const headingRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 2000);
  };

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%'
        }
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%'
        }
      }
    );

    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <section id="contact" ref={contactRef} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl font-bold mb-16 text-center text-white">
          Get In <span className="text-gray-400">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-900 p-8 rounded-xl border border-white/30 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:shreyanshu005@gmail.com" className="text-white hover:text-gray-300">shreyanshu005@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+918178785849" className="text-white hover:text-gray-300">+91 8178785849</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Ghaziabad, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-xl border border-white/30 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            {submitSuccess ? (
              <div className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full bg-gray-800 border border-white/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-white/50"
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full bg-gray-800 border border-white/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-white/50"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-gray-800 border border-white/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-white/50 resize-none"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
                   