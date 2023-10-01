// pages/privacy-policy.js
import React from 'react';
import Head from 'next/head';  
import styles from './privacy-policy.module.css';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy for YouTube Thumbnail Downloader</title>
        <meta name="description" content="Privacy Policy for YouTube Thumbnail Downloader - Learn how we collect, use, and protect your information." />
      </Head>
      <div className={styles.container}>
        <h1>Privacy Policy for YouTube Thumbnail Downloader</h1>
        <p>
          Welcome to the Privacy Policy of YouTube Thumbnail Downloader. Your privacy is
          important to us. This Privacy Policy explains how we collect, use,
          disclose, and protect your information when you use our services.
        </p>

        <h2>Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          and other relevant contact details. The reasons for collecting this
          information will be made clear to you when we ask for it.
        </p>
        <p>
          If you contact us directly, we may receive additional information
          about you, such as your name, email address, phone number, and the
          contents of the message or attachments you send us.
        </p>
        {/* Add more information about data collection */}
        
        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect for various purposes, including
          providing, maintaining, and improving our services, as well as to
          respond to your inquiries and send you updates and promotional
          materials.
        </p>
        {/* Add more details about data usage */}

        {/* Include sections about cookies, third-party policies, CCPA, GDPR, and children's information */}
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Privacy Policy or practices,
          please contact us at privacy@example.com.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
