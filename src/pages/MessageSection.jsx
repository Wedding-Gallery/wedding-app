import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const MessageSection = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [dateTime, setDateTime] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Generate current date and time
    const currentDateTime = new Date().toLocaleString();
    setDateTime(currentDateTime);

    if (message && name) {
      setSuccess(true);
      setMessage('');
      setName('');
      // Here you can implement the actual sending logic (e.g., API call)
    }
  };

  return (
   <div>
    <Navbar/>
     <section className="bg-white py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Send a Message to the Couple</h2>
      
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
          className="w-full p-4 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Write your message here..."
          className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="5"
        />

        <button
          onClick={handleSendMessage}
          className="mt-4 px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600"
        >
          Send Message
        </button>

        {success && (
          <div className="mt-4 text-green-500">
            <p>Your message has been sent! 🎉</p>
            <p className="text-sm text-gray-500">Sent by: {name}</p>
            <p className="text-sm text-gray-500">On: {dateTime}</p>
          </div>
        )}
      </div>
    </section>
   </div>
  );
};

export default MessageSection;
