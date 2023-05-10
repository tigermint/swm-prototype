import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import ContentLayout from "./organisms/ContentLayout";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <ContentLayout>{children}</ContentLayout>
            <Footer />
        </>
    );
}
export default MainLayout;
