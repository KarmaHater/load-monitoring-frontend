import cxs from 'cxs';
import { FONT_FAMILY } from '../../styles/constants/fontFamily.js';
import { COLORS } from '../../styles/constants/colors.js';

const styles = {
    thresholdContainer: average =>
        cxs({
            fontFamily: FONT_FAMILY.montserrat,
            backgroundColor: average > 1
                ? COLORS.reddish
                : COLORS.greenExtraLight,
            color: average > 1 ? COLORS.white : COLORS.green,
            padding: '10px',
            margin: '10px',
            fontSize: '14px'
        })
};

export default styles;
