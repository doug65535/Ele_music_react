import React, { memo } from 'react';

import ELEPlayHeader from './c-cpns/play-header';
import ELEPlayList from './c-cpns/play-list';
import ELELyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function ELEAppPlayList() {
  return (
    <PanelWrapper>
      <ELEPlayHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <ELEPlayList/>
        <ELELyricPanel/>
      </div>
    </PanelWrapper>
  )
})
