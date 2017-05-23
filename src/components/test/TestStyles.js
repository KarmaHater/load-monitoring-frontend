import cxs from 'cxs';
import { FONT_FAMILY } from '../../styles/constants/fontFamily.js';

const styles = {
    textColor: color =>
        cxs({
            fontFamily: FONT_FAMILY.montserrat,
            color: color
        })
};

export default styles;
