import "./AboutPage.scss";
import { useState } from 'react';
// import backgroundImage from './../../assets/Images/background.jpg';

function AboutPage() {
    const [showFullGuidelines, setShowFullGuidelines] = useState(false);

    const toggleGuidelinesVisibility = () => {
        setShowFullGuidelines(!showFullGuidelines);
    };
    return (
        <>
            <div className="about-container">
                <div className="aboutPage">
                    <h1 className="aboutPage__main-title">About Us</h1>

                    <h2 className="aboutPage__title">Mission</h2>
                    <p className="aboutPage__text">At BrushBeat, our mission is to provide a vibrant online space where artists of all levels can connect, inspire, and grow together through the power of creativity.</p>

                    <h2 className="aboutPage__title">Vision</h2>
                    <p className="aboutPage__text">In here we want to create a fun place for the user. Imagine a place where creativity flows freely, like a happy melody. That's what we're all about – bringing artists together to make something amazing!</p>

                    <h2 className="aboutPage__title">Founder's Message</h2>
                    <p className="aboutPage__text">As a creator of BrushBeat, I am driven by a deep passion for art and a belief in its transformative power. This journey began with a desire to break down barriers and provide a platform where every artist feel seen, heard and valued. Feel free to join in celebrating the boundless possibilities of artistic expression.</p>

                    <h2 className="aboutPage__title">Core Values</h2>
                    <p className="aboutPage__text">We believe in fostering a supportive community where artists feel valued, inspired, and encouraged to express themselves freely.</p>

                    <h2 className="aboutPage__title">Platform Features</h2>
                    <p className="aboutPage__text">BrushBeat is a website where artists can share their artwork easily. You can upload your latest creations and get feedback from other artists. Join discussions and chat with fellow creators about your work. Check out different artworks in our gallery or create your own space to display your portfolio. BrushBeat works well on any device, so you can use it from anywhere.</p>

                    <h2 className="aboutPage__title">Community Guidelines</h2>
                    <p className="aboutPage__text">To ensure a positive and respectful environment for all members, we've put together some guidelines that outline the expectations for participation within our community.</p>


                    <ol className={showFullGuidelines ? 'show' : 'hide'}>
                        <li>Respect and Kindness: Treat every member of our community with kindness, empathy, and respect. We celebrate diversity and welcome artists from all walks of life, backgrounds, and skill levels. Regardless of differences in style or perspective, let's foster an environment where everyone feels valued and appreciated.</li>

                        <li>Constructive Feedback: We encourage constructive feedback that helps artists grow and improve their craft. When offering feedback, focus on specific aspects of the artwork and provide thoughtful suggestions for enhancement. Remember to highlight strengths as well as areas for improvement, fostering a supportive environment for artistic development.</li>

                        <li>Healthy Dialogue: Engage in open and respectful dialogue with fellow artists. Share your thoughts, ideas, and experiences in a constructive manner, and be open to learning from others. Disagreements are natural, but let's approach discussions with patience, understanding, and a willingness to listen to different perspectives.</li>

                        <li>Honesty and Integrity: Be honest and transparent in your interactions within the community. Respect the intellectual property rights of fellow artists and refrain from plagiarism or unauthorized use of artwork. If you share work that is not your own, ensure proper attribution and permissions are obtained.</li>

                        <li>Zero Tolerance for Harassment: BrushBeat is committed to providing a safe and welcoming environment free from harassment, discrimination, or any form of harmful behavior. Any instances of harassment, bullying, or disrespectful conduct will not be tolerated and may result in immediate removal from the community.</li>

                        <li>Reporting Concerns: If you encounter behavior that violates our community guidelines or makes you feel uncomfortable, please report it to our moderation team immediately. We take all reports seriously and will take appropriate action to address any violations and maintain the integrity of our community.</li>
                    </ol>
                    <button className="button" onClick={toggleGuidelinesVisibility}>
                        {showFullGuidelines ? 'Hide Guidelines ' : 'Click to Read Guidelines'}
                    </button>
                    <p className="aboutPage__text">By upholding these community guidelines, we can create a nurturing and supportive space where artists feel empowered to share their creativity, receive valuable feedback, and grow as individuals. Thank you for being a part of the BrushBeat community, and let's continue to inspire and uplift one another through the power of art!</p>

                    <h2 className="aboutPage__title">Contact Information</h2>
                    <p className="aboutPage__text">Have questions, feedback, or ideas to share? We'd love to hear from you! Feel free to reach out to us via email at <a href="mailto:contact@brushbeat.com" className="aboutPage__email">contact@brushbeat.com</a> or through our online contact form. Your input is invaluable to us as we strive to make BrushBeat the ultimate destination for artists worldwide.</p>



                </div>

            </div>

        </>
    );
}

export default AboutPage;