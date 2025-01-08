import { useRoutes, BrowserRouter} from 'react-router-dom';
import { LanguageProvider } from './components/LanguageProvider/LanguageProvider';
import Home from './pages/Home';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import Treasury from './pages/Treasury';
import Payments from './pages/Payments';
import FxServices from './pages/FxServices';
import LegalControl from './pages/Compliance';
import Terms from './pages/TermsAndConditions';
import Policy from './pages/PrivacyPolicy';
import './App.css';

function App() {

  function AppLinks () {
    let AppRoutes = useRoutes([
      { path: '/', element: <Home/>},
      { path: '/about-us', element: <AboutUs/>},
      { path: '/smart-treasury', element: <Treasury/>},
      { path: '/international-payments', element: <Payments/>},
      { path: '/fx-services', element: <FxServices/>},
      { path: '/legal-control-aml-kyc', element: <LegalControl/>},
      { path: '/contact-us', element: <ContactUs/>},
      { path: '/terms-and-conditions', element: <Terms/>},
      { path: '/privacy-policy', element: <Policy/>},
    ]);

    return AppRoutes
  }
  
  return (
    <LanguageProvider>
        <BrowserRouter>
          <AppLinks/>
        </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
