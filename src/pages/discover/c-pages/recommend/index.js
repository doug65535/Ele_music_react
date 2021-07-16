import React, { memo } from 'react';

import ELETopBanner from './c-cpns/top-banner';
import ELEHotRecommend from './c-cpns/hot-recommend';
import ELENewAlbum from './c-cpns/new-album';
import ELERankingList from './c-cpns/ranking-list';
import ELEUserLogin from './c-cpns/user-login';
import ELESettleSinger from './c-cpns/settle-singer';
import ELEHotRadio from './c-cpns/hot-radio';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";

export default memo(function ELERecommend() {
  return (
    <RecommendWraper>
      <ELETopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <ELEHotRecommend />
          <ELENewAlbum />
          <ELERankingList />
        </RecommendLeft>
        <RecommendRight>
          <ELEUserLogin />
          <ELESettleSinger />
          <ELEHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
})
