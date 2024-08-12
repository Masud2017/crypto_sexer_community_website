import { ReactNode } from "react";

export default function ({children,intercepted} : {children:ReactNode, intercepted:ReactNode}) {
    return(
        <>
            {children}
            {intercepted}
        </>
    );
}