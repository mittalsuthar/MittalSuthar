import React, { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); 

  useEffect(() => {
    emailjs.init("P5OLbQZCD2OCLF25V");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j9ljg3c', 'template_byallq9', form.current, {
        publicKey: 'P5OLbQZCD2OCLF25V',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus("success"); 
          setTimeout(() => setStatus(""), 3000); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus("failed"); 
          setTimeout(() => setStatus(""), 3000); 
        },
      );
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900" id="contact">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-8 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow"
      >
        <label className="block text-gray-700 dark:text-gray-300">
          Name
          <input
            type="text"
            name="user_name"
            className="w-full mt-2 p-2 border rounded dark:bg-gray-700 dark:text-white"
            required
          />
        </label>
        <label className="block text-gray-700 dark:text-gray-300 mt-4">
          Email
          <input
            type="email"
            name="user_email"
            className="w-full mt-2 p-2 border rounded dark:bg-gray-700 dark:text-white"
            required
          />
        </label>
        <label className="block text-gray-700 dark:text-gray-300 mt-4">
          Message
          <textarea
            name="message"
            rows="4"
            className="w-full mt-2 p-2 border rounded dark:bg-gray-700 dark:text-white"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {/* Confirmation Popup */}
      {status === "success" && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg">
            <p>Email sent successfully!</p>
          </div>
        </div>
      )}

      {status === "failed" && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-red-500 text-white py-3 px-6 rounded-lg shadow-lg">
            <p>Failed to send email. Please try again!</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
