import { useState } from "react";

export default function Footer() {
    
    const [year] = useState(new Date().getFullYear());

    return (
        <footer className="footer footer-center p-4 bg-zinc-400 text-base-content">
            <p className="font-bold">© {year}. All rights reserved.</p>
        </footer>
    )
}
