import { Header } from "@/components/Header";

const Layout = ({ children }: any) => {
    return (
        <>
        <Header/>
            {children}
        <footer>Footer</footer>
        </>
    )
}

export default Layout;