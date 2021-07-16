import React, { memo, Suspense } from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router"

import ELEAppHeader from '@/components/app-header';
import ELEAppFooter from '@/components/app-footer';
import ELEAppPlayBar from '@/pages/player/app-play-bar';

export default memo(function ELEMain() {
  return (
    <HashRouter>
      <ELEAppHeader />
      <Suspense fallback={<div>loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <ELEAppFooter />
      <ELEAppPlayBar/>
    </HashRouter>
  )
})
