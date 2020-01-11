import { News } from 'common';
import { Block, RawSvg } from 'components';
import React from 'react';
import { BtnCreateNews, IconCreateNews } from './style';

export default class Content extends React.Component {
  private get createNews(): JSX.Element {
    return (
      <Block>
        <BtnCreateNews>Создать новость</BtnCreateNews>
        <IconCreateNews>
          <RawSvg icon="home/photo" />
        </IconCreateNews>
        <IconCreateNews>
          <RawSvg icon="home/camera" />
        </IconCreateNews>
        <IconCreateNews>
          <RawSvg icon="home/document" />
        </IconCreateNews>
      </Block>
    );
  }

  private get newsList(): JSX.Element {
    return (
      <div>
        <News />
        <News />
      </div>
    );
  }

  render(): JSX.Element {
    return (
      <>
        {this.createNews}
        {this.newsList}
      </>
    );
  }
}
