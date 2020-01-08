import React from 'react';
import { Profile, ProfileAvatar, ProfileBackground, ProfileName } from './style';

export default class LeftColumn extends React.Component {
  private get profile(): JSX.Element {
    return (
      <Profile>
        <ProfileBackground />
        <ProfileAvatar />
        <ProfileName>Nikolay</ProfileName>
      </Profile>
    );
  }

  render(): JSX.Element {
    return <>{this.profile}</>;
  }
}
