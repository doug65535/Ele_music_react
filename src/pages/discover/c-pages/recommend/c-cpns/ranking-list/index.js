import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getTopData
} from "../../store/actionCreators";

import ELEThemeHeaderRCM from '@/components/theme-header-rcm';
import ELETopRanking from "@/components/top-ranking";
import {
  RankingWrapper
} from "./style";

export default memo(function ELERankingList() {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"])
  }), shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(getTopData(0));
    dispatch(getTopData(2));
    dispatch(getTopData(3));
  }, [dispatch])

  return (
    <RankingWrapper>
      <ELEThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
      <div className="tops">
        <ELETopRanking info={state.topUpList}/>
        <ELETopRanking info={state.topNewList}/>
        <ELETopRanking info={state.topOriginList}/>
      </div>
    </RankingWrapper>
  )
})
