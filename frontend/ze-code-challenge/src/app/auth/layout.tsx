import { ReactNode } from "react";

interface SignInLayoutProps {
    children: ReactNode
}

export default function SignInLayoutProps({ children }: SignInLayoutProps ) {
    return (
        <div>
            <h1>??</h1>
            {children}
        </div>
    )
}