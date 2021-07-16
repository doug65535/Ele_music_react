import React, { memo } from 'react';

import ELEArtistCategory from './c-cpns/artist-category';
import ELEArtistList from './c-cpns/artist-list';
import { ELEArtistWrapper } from './style';

export default memo(function ELEArtist() {
  return (
    <ELEArtistWrapper>
      <div className="content wrap-v2">
        <ELEArtistCategory/>
        <ELEArtistList/>
      </div>
    </ELEArtistWrapper>
  )
})
