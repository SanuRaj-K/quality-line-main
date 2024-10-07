import React from "react";

const Map: React.FC = () => {
  return (
    <div style={{ width: "100%", maxWidth: "100vw", height: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.976038349671!2d55.21943717516048!3d25.11096717776659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6be3310b02a3%3A0x58e97b232fffb5ed!2sQuality%20Line%20Steel%20and%20Welding%20Works!5e1!3m2!1sen!2sin!4v1728285616151!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.307620442412!2d49.6429331!3d27.020443800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a083a7072479%3A0xef9d08da2444368b!2s3119%20King%20Faisal%20W%2C%20Jubail%20City%20Center%2C%20Al%20Jubayl%2035515%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1724600445545!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe> */}
    </div>
  );
};

export default Map;
