import React, { memo } from 'react';

import ELEPlayerInfo from './c-cpns/player-info';
import ELEPlayerComment from './c-cpns/player-comment';
import ELEPlayerSongs from './c-cpns/player-songs';
import ELEPlayerRelevant from './c-cpns/player-relevant';
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function ELEPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <ELEPlayerInfo/>
          <ELEPlayerComment/>
        </PlayerLeft>
        <PlayerRight>
          <ELEPlayerSongs/>
          <ELEPlayerRelevant/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
