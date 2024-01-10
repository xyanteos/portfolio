import LanguageOptionsSlider from "./LanguageOptionsSlider";
import DeviceModeSlider from "./DeviceModeSlider";
import type { NavigationOutletType as expectedContext } from '../Global/Types/NavigationOutletType'

const OptionsPageLangDependant = ({ english, setEnglish, currentModeBlack, setCurrentModeBlack }: expectedContext) => {

    return (
        <div className="options">
            <h1 className="optionsContainer">
                {english ? 'Options' : 'Opcje'}
            </h1>
            <LanguageOptionsSlider english={english} setEnglish={setEnglish} header={false} />
            <DeviceModeSlider currentModeBlack={currentModeBlack} setCurrentModeBlack={setCurrentModeBlack} />
        </div>
    )
}

export default OptionsPageLangDependant