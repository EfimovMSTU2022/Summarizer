import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function History() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">History</h1>
                <p className="text-gray-600 mt-2">Previously generated summaries</p>
            </div>

            <div className="grid gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Title 1</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 mb-4">Short preview of the summary content</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>2025-01-15</span>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">View</Button>
                                <Button variant="outline" size="sm">Delete</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Title 2</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 mb-4">Another summary preview text</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>2025-01-14</span>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">View</Button>
                                <Button variant="outline" size="sm">Delete</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}