export default function App() {
    return (
        <>
            <div className="App">
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


                <h1 className="text-3xl font-bold text-center my-8" >Welcome To My First React App</h1>

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
            </div>
        </>
    )
}
