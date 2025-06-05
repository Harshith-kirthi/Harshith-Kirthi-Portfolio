import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import SingleInfo from "./SingleInfo";
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { motion } from "framer-motion";


const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fxfaz5r",    // 🔁 Replace with your actual EmailJS service ID
        "template_jm1a8rd",   // 🔁 Replace with your actual template ID
        form.current,
        "6h_N0JpjG0enXtAuY"     // 🔁 Replace with your public key from EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("Email error:", error.text);
        }
      );
  };

  return (
  <div id="contact" className="pb-10 pt-28">
    <motion.h2 
    whileInView={{ opacity: 1, y:0}}
    initial={{ opacity: 0, y:-100}}
    transition={{ duration: 0.5}}
    className="my-10 text-center text-4xl">Get in Touch</motion.h2>
    <motion.h6 
    whileInView={{ opacity: 1, y:0}}
    initial={{ opacity: 0, y:-100}}
    transition={{ duration: 0.5}}
    className="text-center sc-jfmDQi fIDHyg pb-24">Feel free to reach out to me for any questions or opportunities!</motion.h6>

    <div 
    whileInView={{ opacity: 1, x:0}}
    initial={{ opacity: 0, x:-100}}
    transition={{ duration: 0.5}}
    className="flex flex-col lg:flex-row justify-center items-start gap-12 max-w-6xl mx-auto px-4">
      
      {/* Left: Contact Info */}
      <motion.div 
      whileInView={{ opacity: 1, x:0}}
      initial={{ opacity: 0, x:-100}}
      transition={{ duration: 0.5}}
      className="flex flex-col gap-6 w-full lg:w-1/2">
        <SingleInfo text="+91 6301816949" Image={FiPhone} link="tel:+916301816949"/>
        <SingleInfo text="harshithkirthi05@gmail.com" Image={HiOutlineMail} link="mailto:harshithkirthi05@gmail.com" />
        <SingleInfo text="GitHub" Image={FaGithub} link="https://github.com/Harshith-kirthi" />
        <SingleInfo text="LinkedIn" Image={FaLinkedin} link="https://www.linkedin.com/in/harshithkirthi/" />
        <SingleInfo text="Twitter" Image={FaSquareXTwitter} link="https://x.com/Harshith_kirthi" />
        <SingleInfo text="Instagram" Image={FaInstagram} link="https://www.instagram.com/harshith.kirthi/" />
      </motion.div>

      {/* Right: Contact Form */}
      <motion.form
      whileInView={{ opacity: 1, x:0}}
      initial={{ opacity: 0, x:200}}
      transition={{ duration: 0.5}}
        ref={form}
        onSubmit={sendEmail}
        className="w-full lg:w-1/2 space-y-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full rounded bg-stone-800 p-3 text-white placeholder-stone-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full rounded bg-stone-800 p-3 text-white placeholder-stone-500"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full rounded bg-stone-800 p-3 text-white placeholder-stone-500"
        ></textarea>
        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Send Message
        </button>

        {isSent && (
          <p className="text-green-500 mt-2 text-center">Message sent successfully!</p>
        )}
      </motion.form>
    </div>
  </div>
);
};

export default Contact;
