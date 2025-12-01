import Image from 'next/image';
import tc from '@/assets/tc.png';
import Navbar from '@/components/Navbar';
import Footer from '@/section/Footer';

export default function TermsAndConditions() {
    return (
        <div className="w-11/12 lg:w-10/12 max-w-[1920px] mx-auto px-4 lg:px-6 text-base 2xl:text-xl md:text-xs lg:text-lg text-black space-y-10">
            <Navbar />
            <div className="bg-[#F5F5F5] rounded-2xl p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/3">
                        <Image
                            src={tc}
                            alt="Terms Illustration"
                            width={400}
                            height={300}
                            className="rounded-xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h1 className="text-2xl lg:text-3xl font-semibold mb-2">Terms & Conditions - Blackspektro</h1>
                        <p className="text-sm text-gray-500">Effective Date: 17th July, 2025</p>
                        <p className="mt-4 leading-relaxed">
                            Welcome to Blackspektro.com. By using this website, you agree to the following terms.
                        </p>
                    </div>
                </div>
            </div>

            <section className="bg-white rounded-2xl p-6 md:p-10 space-y-6">
                <ol className="space-y-6 list-decimal list-inside leading-relaxed">
                    <li>
                        <strong>Intellectual Property</strong>
                        <p className="mt-2">
                            All content on this website, including logos, text, and visuals, are the property of Blackspektro unless stated otherwise. Unauthorized use or reproduction is prohibited.
                        </p>
                    </li>
                    <li>
                        <strong>Website Usage</strong>
                        <p className="mt-2">
                            You may use this website only for lawful purposes. Do not attempt to breach or bypass security or tamper with its content.
                        </p>
                    </li>
                    <li>
                        <strong>Third-Party Content</strong>
                        <p className="mt-2">
                            Our site may link to or embed content from third parties (e.g., Medium). We are not responsible for the content or policies of these external sites.
                        </p>
                    </li>
                    <li>
                        <strong>No Warranties</strong>
                        <p className="mt-2">
                            All information on this site is provided &quot;as is.&quot; We do not guarantee accuracy, availability, or suitability for any specific purpose.
                        </p>
                    </li>
                    <li>
                        <strong>Limitation of Liability</strong>
                        <p className="mt-2">
                            Blackspektro shall not be held liable for any damages arising from the use or inability to use this site, even if we were advised of the possibility.
                        </p>
                    </li>
                    <li>
                        <strong>Governing Law</strong>
                        <p className="mt-2">
                            These terms are governed by the laws of India. Disputes shall be resolved in the jurisdiction of <span className="italic">Siliguri, West Bengal</span>.
                        </p>
                    </li>
                    <li>
                        <strong>Contact</strong>
                        <p className="mt-2">
                            For terms-related inquiries, reach us at:<br />
                            <a href="mailto:hello@blackspektro.com" className="text-blue-600 underline">hello@blackspektro.com</a>
                        </p>
                    </li>
                </ol>
            </section>
            <Footer />
        </div>
    );
}
