import Image from 'next/image';
import pp from '@/assets/pp.png';
import Navbar from '@/components/Navbar';
import Footer from '@/section/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="w-11/12 lg:w-10/12 max-w-[1920] mx-auto px-4 lg:px-6 text-base 2xl:text-xl md:text-xs lg:text-lg text-black space-y-10">
            <Navbar />

            <div className="bg-[#F5F5F5] rounded-2xl p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/3">
                        <Image
                            src={pp}
                            alt="Privacy Illustration"
                            width={400}
                            height={300}
                            className="rounded-xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h1 className="text-2xl lg:text-3xl font-semibold mb-2">Privacy Policy - Blackspektro</h1>
                        <p className="text-sm text-gray-500">Effective Date: 17th July, 2025</p>
                        <p className="mt-4 leading-relaxed">
                            Blackspektro (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to respecting your privacy. This Privacy Policy outlines how we handle information submitted through our website.
                        </p>
                    </div>
                </div>
            </div>

            <section className="bg-white rounded-2xl p-6 md:p-10 space-y-6">
                <ol className="space-y-6 list-decimal list-inside leading-relaxed">
                    <li>
                        <strong>Information We Collect</strong>
                        <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                            <li>Name</li>
                            <li>Email</li>
                            <li>Phone Number</li>
                            <li>Company Name</li>
                            <li>Message</li>
                        </ul>
                        <p className="mt-2">
                            No session data, tracking information, or behavioral data is collected.
                        </p>
                    </li>
                    <li>
                        <strong>How We Use Your Data</strong>
                        <p className="mt-2">
                            The information you submit is used solely to respond to your inquiry or request. We do not use your data for marketing, profiling, or automated decision-making.
                        </p>
                    </li>
                    <li>
                        <strong>Data Storage & Third Parties</strong>
                        <p className="mt-2">
                            We do not store your data on our own servers.<br />
                            Information may be passed securely through tools such as ClickUp, which handles data per their <a href="https://clickup.com/terms/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Privacy Policy</a>.
                        </p>
                    </li>
                    <li>
                        <strong>Cookies</strong>
                        <p className="mt-2">
                            We use only analytics cookies via embedded Medium blog content. These cookies are governed by <a href="https://help.medium.com/hc/en-us/articles/213481328-Medium-Privacy-Policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Medium’s Privacy Policy</a>.<br />
                            A cookie banner is displayed to inform you and allow consent.
                        </p>
                    </li>
                    <li>
                        <strong>Security</strong>
                        <p className="mt-2">
                            Our website uses SSL/TLS encryption to protect your data in transit.<br />
                            We do not store or retain any form submissions or visitor data.
                        </p>
                    </li>
                    <li>
                        <strong>Data Retention & Deletion</strong>
                        <p className="mt-2">
                            We do not retain user-submitted data. If you contact us, your data may only be present in communication history (e.g., email). No additional storage or backups are maintained.
                        </p>
                    </li>
                    <li>
                        <strong>Your Rights</strong>
                        <p className="mt-2">
                            As we do not store or track personal data beyond initial form submission, there is no user account data to export, modify, or delete.
                        </p>
                    </li>
                    <li>
                        <strong>Contact</strong>
                        <p className="mt-2">
                            For any questions related to your privacy, you may contact us at:<br />
                            📧 <a href="mailto:hello@blackspektro.com" className="text-blue-600 underline">hello@blackspektro.com</a>
                        </p>
                    </li>
                </ol>
            </section>

            <Footer />
        </div>
    );
}
