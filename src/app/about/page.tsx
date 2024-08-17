function About() {
    return (
        <div
            className="content-h snap-y snap-mandatory overflow-y-auto no-scrollbar">
            <div
                className="content-h h-screen snap-center flex items-center justify-center bg-blue-500 text-white text-3xl">
                Section 1 (Snap)
            </div>
            <div
                className="content-h snap-center flex items-center justify-center bg-green-500 text-white text-3xl">
                Section 2
            </div>
            <div
                className="content-h snap-center flex items-center justify-center bg-red-500 text-white text-3xl">
                Section 3
            </div>
            <div
                className="content-h snap-center flex items-center justify-center bg-purple-500 text-white text-3xl">
                Section 4
            </div>
        </div>
    );
}

export default About;