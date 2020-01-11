// tslint:disable:max-classes-per-file
import { SIZE } from 'const';
import React from 'react';
import { ActionButton, ActionPanel, Avatar, Container, Header, Images, RawSvg, Statistics, Text } from './style';

class ActionItem extends React.Component<{ icon: string; children?: any }> {
  render(): JSX.Element {
    return (
      <ActionButton>
        <RawSvg icon={this.props.icon} />
        {this.props.children}
      </ActionButton>
    );
  }
}

export default class extends React.Component {
  render(): JSX.Element {
    return (
      <Container>
        <Header>
          <Avatar size={SIZE.SMALL} reset />
        </Header>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sequi nulla voluptatibus consequatur voluptatum,
          eaque repudiandae repellendus placeat modi atque voluptate molestias nihil aliquid optio neque ut
          necessitatibus sit dicta!
        </Text>
        <Images
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ba444a28739655.55cfb1b2ee941.jpg"
          alt="user_images"
        />
        <Statistics>
          <li>Лайки: 1</li>
          <li>Комментарии: 2</li>
          <li>Просмотры: 3</li>
        </Statistics>
        <ActionPanel>
          <ActionItem icon="common/like">Нравится</ActionItem>
          <ActionItem icon="common/comment">Комментировать</ActionItem>
          <ActionItem icon="common/share">Поделиться</ActionItem>
        </ActionPanel>
      </Container>
    );
  }
}
