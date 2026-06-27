export default function App() {
    return (
        <>
            <div className="App">
                {/* Navigation bar with the app name and main page links */}
                <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
                    <span className="text-xl font-bold">
                        My App
                    </span>

                    <div className="space-x-4">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">About</a>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                    </div>
                </nav>


                {/* Main welcome heading */}
                <h1 className="text-3xl font-bold text-center my-8" >Welcome To My First React App</h1>

                {/* Reusable cards created from an array */}
                <div className="flex flex-wrap justify-center gap-6 px-6 pb-10 ">
                    {[1, 2, 3].map((num) => (
                        <div
                            key={num}
                            className="w-64 rounded-lg cursor-pointer hover:shadow-gray-400 shadow-md border border-gray-200 p-4 transition-shadow duration-300"
                        >
                            <h2 className="text-lg font-semibold mb-2">Card {num}</h2>
                            <p className="text-gray-600 text-sm">
                                This is some example content for card {num}.
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact form styled to match the clean gray app theme */}
                <form className="max-w-xl mx-auto mb-12 px-6 py-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Write your message"
                            className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-gray-900 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </>
    )
}
