import { SIZE } from 'const';
import React from 'react';
import { Avatar, Profile, ProfileBackground, ProfileName, Settings } from './style';

export default class LeftColumn extends React.Component {
  private get profile(): JSX.Element {
    return (
      <>
        <Profile>
          <ProfileBackground />
          <Avatar size={SIZE.MIDDLE} />
          <ProfileName>Nikolay</ProfileName>
        </Profile>
        <Settings>
          <ProfileName>Какие-то настройки</ProfileName>
        </Settings>
      </>
    );
  }

  render(): JSX.Element {
    return <>{this.profile}</>;
  }
}
