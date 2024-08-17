import {PropsWithChildren} from "react";

interface Props extends PropsWithChildren {
    className?: string;
}

function LayoutCenter({children, className}: Props) {
    return (
        <main className={`max-w-screen-xl mx-auto ${className}`}>
            {children}
        </main>
    );
}

export default LayoutCenter;