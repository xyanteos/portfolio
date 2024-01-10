import './AboutMePage.css'
import { NavigationOutletType } from "../Global/Types/NavigationOutletType";
import { useOutletContext } from "react-router-dom";
import AboutMePageEn from './AboutMePage_EN';
import AboutMePagePL from './AboutMePage_PL';

const AboutMePage = () => {

    const props: NavigationOutletType = useOutletContext()

    return props.english ? <AboutMePageEn /> : <AboutMePagePL />
}

export default AboutMePage