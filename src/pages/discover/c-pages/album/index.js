import React, { memo } from 'react';

import ELEHotAlbum from './c-cpns/hot-album';
import ELETopAlbum from './c-cpns/top-album';
import {
  AblumWrapper
} from './style';

export default memo(function ELEAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <ELEHotAlbum/>
      <ELETopAlbum/>
    </AblumWrapper>
  )
})
