import { SIZE } from 'const';
import React from 'react';
import { Avatar, Profile, ProfileBackground, ProfileName } from './style';

export default class LeftColumn extends React.Component {
  private get profile(): JSX.Element {
    return (
      <Profile>
        <ProfileBackground />
        <Avatar size={SIZE.MIDDLE} />
        <ProfileName>Nikolay</ProfileName>
      </Profile>
    );
  }

  render(): JSX.Element {
    return <>{this.profile}</>;
  }
}
