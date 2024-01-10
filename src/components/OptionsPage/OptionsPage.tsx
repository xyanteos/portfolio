import './OptionsPage.css'
import { useOutletContext } from "react-router-dom";
import OptionsPageLangDependant from "./OptionsPageLangDependant";
import {NavigationOutletType} from '../Global/Types/NavigationOutletType'

const OptionsPage = () => {

    const context : NavigationOutletType = useOutletContext()


    return <OptionsPageLangDependant english={context.english} setEnglish={context.setEnglish} currentModeBlack={context.currentModeBlack} setCurrentModeBlack={context.setCurrentModeBlack}/>
}

export default OptionsPage