import { LayoutProps } from "@/shared/types";

export const Layout = ({children}: LayoutProps) => {
    return <div className="container mx-auto max-w-screen-xl">{children}</div>
}
