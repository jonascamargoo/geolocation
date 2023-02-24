import { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayoutProps({ children }: AuthLayoutProps ) {
    return (
        <div>
            <h1>Auth</h1>
            {children}
        </div>
    )
}