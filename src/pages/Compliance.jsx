import HeaderComp from '../components/CompliancePage/HeaderCompliance/HeaderCompliance';
import AmlKyc from '../components/CompliancePage/AMLKYC/AMLKYC';
import Footer from '../components/Footer/Footer';
import '../styles/variables.css';

const Compliance = () => {

    return (
        <>
            <HeaderComp/>
            <AmlKyc/>
            <Footer/>
        </>
    );
};

export default Compliance;