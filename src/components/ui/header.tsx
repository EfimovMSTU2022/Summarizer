import Link from "next/link"

export const Header = () => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <Link
                        href="/"
                        className="text-xl font-bold text-blue-600 hover:text-blue-700"
                    >
                        SummaryAI
                    </Link>
                    <div className="flex space-x-6">
                        <Link
                            href="/summarize"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            New Summary
                        </Link>
                        <Link
                            href="/history"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            History
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}