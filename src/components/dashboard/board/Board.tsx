import { useState } from "react";
import {DndContext} from '@dnd-kit/core';

interface Task {
    id: number;
    title: string;
    description: string;
}

export default function Board() {

    const [columns, setColumns] = useState<{ id: number; title: string; tasks: Task[] }[]>([
        { id: 1, title: "To Do", tasks: [] },
        { id: 2, title: "In Progress", tasks: [] },
        { id: 3, title: "Done", tasks: [] },
    ]);

    function AddTaskToColumn(taskTitle : string, taskDescription : string, columnIndex : number)
    {
        const newTask : Task = {
            id: Date.now(),
            title: taskTitle,
            description : taskDescription,
        };

        setColumns(prev => {
            const updatedColumns = [...prev];
            updatedColumns[columnIndex].tasks.push(newTask);
            return updatedColumns;
        })
    }

    function RemoveTaskFromColumn(taskId : number, columnIndex : number)
    {
        setColumns(prev => {
            const updatedColumns = [...prev];
            updatedColumns[columnIndex].tasks = 
            updatedColumns[columnIndex].tasks.filter(
                task => task.id !== taskId
            );

            return updatedColumns;
        });
    }

    function CreateNewColumn(columnTitle : string)
    {
        const newColumn = {
            id: Date.now(),
            title: columnTitle,
            tasks: [] as Task[],
        };

        setColumns(prev => [...prev, newColumn]);
    }

    function RemoveColumn(columnIndex : number)
    {
        setColumns(prev => {
            const updatedColumns = [...prev];
            updatedColumns.splice(columnIndex, 1);
            
            return updatedColumns;
        });
    }

    return (
        <DndContext>
            
        </DndContext>
    )
}
