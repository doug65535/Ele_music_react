import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import ELEThemeHeaderNormal from '@/components/theme-header-normal';
import ELEAlphaList from './c-cpns/alpha-list';
import ELEArtistItem from './c-cpns/artist-item';
import {
  ArtistListWrapper
} from './style';

export default memo(function ELEArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <ELEThemeHeaderNormal title={currentType.name} />
      <ELEAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <ELEArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
