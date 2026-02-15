import {FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube, FaLinkedin, FaWhatsapp} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 px-6 sm:px-12 py-12 relative">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                <div>
                    <h3 className="text-lg font-semibold mb-4">Kavithma NextGen Academy</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Explore the beauty of mathematics learning with structured lessons, exam guidance, and
                        confidence-building exercises. Your trusted academy for Grades 6–11.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-gray-400 text-sm mb-2">📞 +94 71 123 4567</p>
                    <p className="text-gray-400 text-sm mb-2">📧 info@nextgenacademy.com</p>
                    <p className="text-gray-400 text-sm">📍 Colombo, Sri Lanka</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                    <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for updates and learning
                        tips!</p>

                    <div className="flex gap-2 mb-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-semibold">Subscribe
                        </button>
                    </div>

                    <div className="flex gap-3 mt-2">
                        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition text-gray-200"><FaFacebookF/></a>
                        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition text-gray-200"><FaInstagram/></a>
                        <a href="#"
                           className="bg-gray-800 p-3 rounded-full hover:bg-black transition text-gray-200"><FaTiktok/></a>
                        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition text-gray-200"><FaTwitter/></a>
                        <a href="#"
                           className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition text-gray-200"><FaYoutube/></a>
                        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition text-gray-200"><FaLinkedin/></a>
                        <a href="#"
                           className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition text-gray-200"><FaWhatsapp/></a>
                    </div>
                </div>

            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                © 2026 Kavithma NextGen Academy. All rights reserved.
            </div>

            <a href="https://wa.me/774519007" target="_blank"
               className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition">
                <FaWhatsapp className="text-white text-xl"/>
            </a>
        </footer>
    );
}