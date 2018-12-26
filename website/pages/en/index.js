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
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
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
            <Button href="#GettingStarted">GettingStarted</Button>
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

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>高性能</h2>
        <MarkdownBlock>性能优于RN，Weex</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: '一次编写Android和iOS两处运行。我们正在着手开发，支持更多平台。',
            image: `${baseUrl}img/android_ios.png`,
            imageAlign: 'left',
            title: '跨平台',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              '支持热更新，为新功能触达用户提供了更大的便利',
            image: `${baseUrl}img/repair.png`,
            imageAlign: 'right',
            title: '热更新',
          },
        ]}
      </Block>
    );

    const HighPerformance = () => (
      <Block background="light">
        {[
          {
            content: '性能由于广泛使用的RN和Weex。我们写了一个 Demo，分别对 VideoNative、Weex、ReactNative 和 Hippy 进行测试。',
            image: `${baseUrl}img/performance_compare.gif`,
            imageAlign: 'right',
            title: '高性能',
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
          <HighPerformance />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
