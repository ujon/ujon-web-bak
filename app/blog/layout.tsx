import React, {PropsWithChildren} from "react";
import LayoutCenter from "@/components/LayoutCenter";

function BlogLayout({children}: PropsWithChildren) {
    return (
        <LayoutCenter className="content-pb">
            {children}
        </LayoutCenter>
    )
}

export default BlogLayout;