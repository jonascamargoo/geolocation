import { ReactNode } from "react";

interface CustomerLayoutProps {
    children: ReactNode
}

export default function CustomerLayoutProps({ children }: CustomerLayoutProps ) {
    return (
        <div>
            <h1>Customer</h1>
            {children}
        </div>
    )
}