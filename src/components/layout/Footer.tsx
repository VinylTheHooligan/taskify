import { useState } from "react";

export default function Footer() {
    
    const [year] = useState(new Date().getFullYear());

    return (
        <footer className="footer footer-center p-4 bg-zinc-200 text-base-content">
            <p className="font-bold">TASKIFY © {year}. All rights reserved.</p>
        </footer>
    )
}
