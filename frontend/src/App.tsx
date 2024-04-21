//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import { ArtistsList, ArtistsCreate, ArtistsEdit } from './resources/Artists';
import { SongsList, SongsCreate, SongsEdit } from './resources/Songs';
import { AlbumsList, AlbumsCreate, AlbumsEdit } from './resources/Albums';
import { ChartsList, ChartsCreate, ChartsEdit } from './resources/Charts';
import {
  PlatformsList,
  PlatformsCreate,
  PlatformsEdit,
} from './resources/Platforms';
import ArtistsIcon from '@mui/icons-material/Person';
import SongsIcon from '@mui/icons-material/MusicNote';
import AlbumsIcon from '@mui/icons-material/Album';
import ChartsIcon from '@mui/icons-material/BarChart';
import PlatformsIcon from '@mui/icons-material/Public';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/aba79a4ce">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="Artists"
          options={{ label: 'Artists' }}
          list={ArtistsList}
          create={ArtistsCreate}
          edit={ArtistsEdit}
          recordRepresentation="name"
          icon={ArtistsIcon}
        />
        <Resource
          name="Songs"
          options={{ label: 'Songs' }}
          list={SongsList}
          create={SongsCreate}
          edit={SongsEdit}
          recordRepresentation="title"
          icon={SongsIcon}
        />
        <Resource
          name="Albums"
          options={{ label: 'Albums' }}
          list={AlbumsList}
          create={AlbumsCreate}
          edit={AlbumsEdit}
          recordRepresentation="title"
          icon={AlbumsIcon}
        />
        <Resource
          name="Charts"
          options={{ label: 'Charts' }}
          list={ChartsList}
          create={ChartsCreate}
          edit={ChartsEdit}
          recordRepresentation="chartName"
          icon={ChartsIcon}
        />
        <Resource
          name="Platforms"
          options={{ label: 'Platforms' }}
          list={PlatformsList}
          create={PlatformsCreate}
          edit={PlatformsEdit}
          recordRepresentation="name"
          icon={PlatformsIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
