/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://video_native.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: '腾讯视频',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/video_native.png'.
    image: 'img/tencentvideo.jpg',
    infoLink: 'https://v.qq.com',
    pinned: true,
  },
  {
    caption: 'WeTV',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/video_native.png'.
    image: 'img/wetv.png',
    infoLink: 'https://wetv.qq.com/',
    pinned: true,
  },
  {
    caption: 'Yoo视频',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/video_native.png'.
    image: 'img/yoo.png',
    infoLink: 'http://yoo.qq.com/',
    pinned: true,
  }
];

const siteConfig = {
  title: 'Video Native', // Title for your website.
  tagline: 'Video Native Official Website',
  url: 'https://videonative.io/', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'VideoNative',
  organizationName: 'VideoNative',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting-started-basis', label: 'Getting Started'},
    {doc: 'api-ui-controls', label: 'API'},
    {doc: 'playground-index', label: 'Playground'},
    {doc: 'version-index', label: 'Versions'},
    //TODO 暂时没有帮助页面 {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/video_native.png',
  footerIcon: 'img/video_native.png',
  favicon: 'img/video_native.png',

  /* Colors for website */
  colors: {
    primaryColor: '#324994',
    secondaryColor: '#202e5c',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Tencent Inc`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/video_native.png',
  twitterImage: 'img/video_native.png',


  stylesheets: ["https://fonts.googleapis.com/css?family=Charm"],
  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
