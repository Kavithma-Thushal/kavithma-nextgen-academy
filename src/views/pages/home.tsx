export default function Home() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">

            <section className="text-center px-4 py-20 bg-gradient-to-b from-gray-900 to-gray-950">
                <h1 className="text-4xl md:text-6xl font-extrabold">
                    🎓 Kavithma NextGen Academy 🎓
                </h1>

                <h2 className="text-xl md:text-2xl text-blue-400 mb-10">
                    Mathematics | Grade 6 – 11
                </h2>

                <p className="max-w-6xl mx-auto text-gray-300 leading-relaxed">
                    Welcome to a modern mathematics learning experience designed to help students understand concepts
                    clearly, improve problem-solving skills, and achieve excellent academic results. Our structured
                    teaching methods combine theory, practice, and exam-focused guidance to build confidence in every
                    student.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
                        Learn More
                    </button>
                    <button className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-semibold">
                        Join a Class
                    </button>
                </div>
            </section>

            <section className="px-6 max-w-6xl mx-auto">

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">📘 Structured Lessons</h3>
                        <p className="text-gray-400">
                            Step-by-step explanations aligned with mathematics syllabus for Grades 6–11.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">🧠 Exam Preparation</h3>
                        <p className="text-gray-400">
                            Past paper discussions, model questions, and smart techniques to score higher in exams.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">🚀 Student Progress</h3>
                        <p className="text-gray-400">
                            Continuous guidance to improve confidence, accuracy, and mathematical thinking skills.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}