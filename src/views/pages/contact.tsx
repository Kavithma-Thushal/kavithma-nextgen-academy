export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">

            <section className="text-center px-4 pt-16 pb-5 bg-gradient-to-b from-gray-900 to-gray-950">
                <h1 className="text-4xl md:text-6xl font-extrabold">
                    Contact Us
                </h1>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-3xl mx-auto">
                <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-300 mb-2" htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Your message..."
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-semibold"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
}