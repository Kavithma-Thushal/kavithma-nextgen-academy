export default function Classes() {
    const classList = [
        {
            grade: "Grade 6",
            subject: "Mathematics",
            description: "Fundamentals of arithmetic, fractions, decimals, and basic problem-solving."
        },
        {
            grade: "Grade 7",
            subject: "Mathematics",
            description: "Advanced arithmetic, introduction to algebra, geometry concepts."
        },
        {
            grade: "Grade 8",
            subject: "Mathematics",
            description: "Algebra, geometry, statistics, and critical thinking exercises."
        },
        {
            grade: "Grade 9",
            subject: "Mathematics",
            description: "Algebra II, coordinate geometry, and introductory trigonometry."
        },
        {
            grade: "Grade 10",
            subject: "Mathematics",
            description: "Trigonometry, probability, functions, and exam-focused practice."
        },
        {
            grade: "Grade 11",
            subject: "Mathematics",
            description: "Advanced topics including calculus foundations, problem-solving strategies."
        },
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">

            <section className="text-center px-4 py-16 bg-gradient-to-b from-gray-900 to-gray-950">
                <h1 className="text-4xl md:text-6xl font-extrabold">
                    Available Classes
                </h1>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {classList.map((cls, index) => (
                        <div key={index}
                             className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition transform text-center">
                            <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-3">
                                📚 {cls.grade} - {cls.subject}
                            </h3>
                            <p className="text-gray-400 text-sm sm:text-base md:text-base">
                                {cls.description}
                            </p>
                            <div className="mt-4 flex justify-center">
                                <button
                                    className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-semibold">
                                    Join Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}