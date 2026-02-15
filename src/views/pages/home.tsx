export default function Home() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">

            {/* HERO SECTION */}
            <section className="text-center px-4 py-20 bg-gradient-to-b from-gray-900 to-gray-950">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    🎓 Kavithma NextGen Academy
                </h1>

                <h2 className="text-xl md:text-2xl text-blue-400 mb-6">
                    Mathematics Classes | Grade 6 – 11
                </h2>

                <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
                    Welcome to a modern mathematics learning experience designed to
                    help students understand concepts clearly, improve problem-solving
                    skills, and achieve excellent academic results. Our structured
                    teaching methods combine theory, practice, and exam-focused
                    guidance to build confidence in every student.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-semibold">
                        Join a Class
                    </button>

                    <button className="px-8 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
                        Learn More
                    </button>
                </div>
            </section>


            {/* FEATURES */}
            <section className="px-6 py-16 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose Kavithma NextGen Academy?
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">📘 Structured Lessons</h3>
                        <p className="text-gray-400">
                            Step-by-step explanations aligned with the Sri Lankan
                            mathematics syllabus for Grades 6–11.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">🧠 Exam Preparation</h3>
                        <p className="text-gray-400">
                            Past paper discussions, model questions, and smart
                            techniques to score higher in exams.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">🚀 Student Progress</h3>
                        <p className="text-gray-400">
                            Continuous guidance to improve confidence, accuracy,
                            and mathematical thinking skills.
                        </p>
                    </div>
                </div>
            </section>


            {/* COURSES */}
            <section className="bg-gray-900 py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Available Classes
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11"].map((grade) => (
                        <div key={grade} className="bg-gray-800 p-6 rounded-xl shadow hover:bg-gray-700 transition">
                            <h3 className="text-xl font-semibold mb-2">{grade} Mathematics</h3>
                            <p className="text-gray-400">
                                Comprehensive lessons covering theory, exercises,
                                and exam preparation.
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* CTA SECTION */}
            <section className="text-center py-20 px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Start Your Mathematics Journey Today 🚀
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                    Join Kavithma NextGen Academy and experience a new way of learning
                    mathematics with clear explanations, guided practice, and
                    result-oriented teaching.
                </p>

                <button
                    className="px-10 py-4 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                    Contact Now
                </button>
            </section>

        </div>
    )
}