export default function About() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">

            <section
                className="text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10">
                    About Us
                </h1>

                <p className="max-w-6xl mx-auto text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                    At Kavithma NextGen Academy, we believe every student can excel in mathematics with the right
                    guidance and practice. Our mission is to create a supportive, interactive, and modern learning
                    environment where students understand concepts clearly, develop strong problem-solving skills, and
                    achieve their academic goals. We focus on building both confidence and competence, preparing
                    learners not just for exams, but for lifelong success in mathematics and beyond.
                </p>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
                <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
                    <div className="bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg hover:scale-105 transition transform">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">🎯 Our Vision</h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                            To nurture a generation of confident and skilled mathematicians who enjoy learning and excel
                            in every academic challenge.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg hover:scale-105 transition transform">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">👨‍🏫 Our Teaching</h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Structured lessons, interactive problem-solving, and exam-focused guidance designed for
                            Grades 6–11.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg hover:scale-105 transition transform">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">🚀 Student Growth</h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Personalized support to track progress, build confidence, and strengthen mathematical
                            thinking skills.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}