import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QuestionArrays } from '@/components/QuestionArrays'
import { Notes } from '@/components/Notes'

export const Tab = () => {
    return (
        <Tabs defaultValue="Questianaire" className="w-full">
            <TabsList className='w-full'>
                <TabsTrigger value="Questianaire" className='w-full text-xl py-2'>Questianaire</TabsTrigger>
                <TabsTrigger value="Notes" className='w-full text-xl py-2'>Notes</TabsTrigger>
            </TabsList>
            <TabsContent value="Questianaire"><QuestionArrays /></TabsContent>
            <TabsContent value="Notes"><Notes /></TabsContent>
        </Tabs>
    )
}
