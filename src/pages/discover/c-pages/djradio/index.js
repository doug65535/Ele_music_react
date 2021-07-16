import React, { memo } from 'react';

import ELERadioCategory from './c-cpns/radio-category';
import ELERadioRecommend from './c-cpns/radio-recommend';
import ELERadioRanking from './c-cpns/radio-ranking';
import {
  DjRadioWrapper
} from "./style";

export default memo(function ELEDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <ELERadioCategory />
      <ELERadioRecommend />
      <ELERadioRanking />
    </DjRadioWrapper>
  )
})
