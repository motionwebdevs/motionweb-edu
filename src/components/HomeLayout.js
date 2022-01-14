import Header from "./Header/header";
import Footer from "./Footer/footer";
export const HomeLayout = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}