"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"


export default function Summarize() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                        Create New Summary
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                        placeholder="https://article.com"
                        className="w-full"
                    />
                    <Button className="w-full">
                        Summarize
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}