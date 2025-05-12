import { Header } from "../components/organisms/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header/>
            <div className="container mx-auto mt-[120px] p-2  mb-[100px] round-xl">
                {children}
            </div>
        </>
    );
}