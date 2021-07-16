import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import { getTops } from "./store/actionCreators";

import ELETopRanking from "./c-cpns/top-ranking";
import ELERankingHeader from './c-cpns/ranking-header';
import ELERankingList from './c-cpns/ranking-list';
import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style";

export default memo(function ELERanking() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <ELETopRanking/>
      </RankingLeft>
      <RankingRight>
        <ELERankingHeader/>
        <ELERankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})
