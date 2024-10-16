import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup, } from "@/components/ui/resizable"
import { QuestionArrays } from '@/components/QuestionArrays'
import { Notes } from '@/components/Notes'


export const Resizable = () => {
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel className='p-5'><QuestionArrays /></ResizablePanel>
            <ResizableHandle withHandle/>
            <ResizablePanel className='p-5'><Notes /></ResizablePanel>
        </ResizablePanelGroup>

    )
}
