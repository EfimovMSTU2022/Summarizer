export const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 text-sm">
                            © 2025 SummaryAI. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}