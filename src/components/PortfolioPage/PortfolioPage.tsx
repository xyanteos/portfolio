import { useOutletContext } from 'react-router-dom';
import { NavigationOutletType } from '../Global/Types/Navigation';
import './PortfolioPage.css'
import PortfolioPagePl from "./PortfolioPage_PL";
import PortfolioPageEn from './PortfolioPage_EN';

const PortfolioPage = () => {
    const context: NavigationOutletType = useOutletContext()
    return <>
        {context.english ? <PortfolioPageEn /> : <PortfolioPagePl />}
    </>
}

export default PortfolioPage