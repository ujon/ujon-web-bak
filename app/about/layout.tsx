import {PropsWithChildren} from "react";
import LayoutCenter from "@/components/LayoutCenter";

function AboutLayout({children}: PropsWithChildren) {
    return (
        <LayoutCenter>
            {children}
        </LayoutCenter>
    );
}


export default AboutLayout;