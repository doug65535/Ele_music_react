import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { 
  getRadioRecommend
} from "../../store/actionCreators";

import ELEThemeHeaderNormal from '@/components/theme-header-normal';
import ELERadioRecomendCover from '@/components/radio-recommend-cover';
import {
  RecommendWrapper
} from "./style";

export default memo(function ELERadioRecommend() {
  // redux
  const { currentId, recommends } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    recommends: state.getIn(["djradio", "recommends"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadioRecommend(currentId));
  }, [dispatch, currentId])

  return (
    <RecommendWrapper>
      <ELEThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {
          recommends.slice(0, 5).map((item) => {
            return (<ELERadioRecomendCover info={item} key={item.id}/>)
          })
        }
      </div>
    </RecommendWrapper>
  )
})
