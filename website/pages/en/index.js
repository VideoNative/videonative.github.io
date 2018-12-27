/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <div>
      <h2 className="projectTitle animationTitle">
        {siteConfig.title}
      </h2>
      <h2><small>{siteConfig.tagline}</small>
        </h2>
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/big_video_native.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('getting-started-basis.html')}>Getting Started</Button>
            <Button href={docUrl('api-ui-controls.html')}>API</Button>
            <Button href={docUrl('playground-index.html')}>Playground</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    // const FeatureCallout = () => (
    //   <div
    //     className="productShowcaseSection paddingBottom"
    //     style={{textAlign: 'center'}}>
    //     <h2>高性能</h2>
    //     <MarkdownBlock>性能优于RN，Weex</MarkdownBlock>
    //   </div>
    // );

    const Feature_1 = () => (
      <Block background="light">
        {[
          {
            content: 'Video Native采用各平台本地代码编写，性能优越。',
            image: `${baseUrl}img/high_performance.png`,
            imageAlign: 'right',
            title: '高性能',
          },
        ]}
      </Block>
    );


    const Feature_2 = () => (
      <Block id="try">
        {[
          {
            content: '一次编写Android&iOS双平台运行。我们正在着手开发，支持更多平台。',
            image: `${baseUrl}img/android_ios.png`,
            imageAlign: 'left',
            title: '跨平台',
          },
        ]}
      </Block>
    );

    const Feature_3 = () => (
      <Block background="dark">
        {[
          {
            content:
              '支持热更新，随时随地发布新的产品体验。',
            image: `${baseUrl}img/repair.png`,
            imageAlign: 'right',
            title: '热更新',
          },
        ]}
      </Block>
    );


    // const Features = () => (
    //   <Block layout="fourColumn">
    //     {[
    //       {
    //         content: '一次开发Android&iOS双平台运行',
    //         image: `${baseUrl}img/docusaurus.svg`,
    //         imageAlign: 'top',
    //         title: '跨平台',
    //       },
    //       {
    //         content: '动态发布无需更新APP',
    //         image: `${baseUrl}img/docusaurus.svg`,
    //         imageAlign: 'top',
    //         title: '热更新',
    //       },
    //     ]}
    //   </Block>
    // );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
            <p>{user.caption}</p>
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>谁在使用？</h2>
          <p>使用Video Native高性能的移动跨平台开发框架的APP</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              更多 {siteConfig.title} 的使用者
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
          {/* <FeatureCallout /> */}
          <Feature_1 />
          <Feature_2 />
          <Feature_3 />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
