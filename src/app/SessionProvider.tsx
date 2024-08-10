"use client"
import {SessionProvider as Provider, useSession} from "next-auth/react";
import { redirect } from "next/navigation";
export default function SessionProvider({children}: {children: React.ReactNode}) {
    
    return (
        <Provider>
            {children}
        </Provider>
    )
}