import React from 'react';
import { Redirect } from "react-router-dom";

// import ELEDiscover from "../pages/discover";
// import ELERecommend from "../pages/discover/c-pages/recommend";
// import ELERanking from "../pages/discover/c-pages/ranking";
// import ELESongs from "../pages/discover/c-pages/songs";
// import ELEDjradio from "../pages/discover/c-pages/djradio";
// import ELEArtist from "../pages/discover/c-pages/artist";
// import ELEAlbum from "../pages/discover/c-pages/album";
// import ELEPlayer from "../pages/player";

// import ELEFriend from "../pages/friend";
// import ELEMine from "../pages/mine";

const ELEDiscover = React.lazy(_ => import("../pages/discover"));
const ELERecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const ELERanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const ELESongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const ELEDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const ELEArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const ELEAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
const ELEPlayer = React.lazy(_ => import("../pages/player"));


const ELEFriend = React.lazy(_ => import("../pages/friend"));
const ELEMine = React.lazy(_ => import("../pages/mine"));


export default [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: ELEDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/artist"}/>
        )
      },
      {
        path: "/discover/recommend",
        component: ELERecommend
      },
      {
        path: "/discover/ranking",
        component: ELERanking
      },
      {
        path: "/discover/songs",
        component: ELESongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: ELEDjradio
      },
      {
        path: "/discover/artist",
        component: ELEArtist
      },
      {
        path: "/discover/album",
        component: ELEAlbum
      },
      {
        path: "/discover/player",
        component: ELEPlayer
      }
    ]
  },
  {
    path: "/friend",
    component: ELEFriend
  },
  {
    path: "/mine",
    component: ELEMine
  }
]