import { useState } from "react"

export default function BoardColumn() {

    const [columnInfo, setColumnInfo] = useState({
        id: 0,
        title: "To Do",
        tasks: [] as { id: number; title: string; description: string }[],
    })

    return (
        <div>BoardColumn</div>
    )
}
