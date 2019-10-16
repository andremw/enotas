/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://andremw.github.io/enotas',
    pinned: true,
  },
];

const siteConfig = {
  title: 'eNotas Wrapper',
  tagline: 'A website for testing',
  url: 'https://andremw.github.io/enotas', 
  baseUrl: '/enotas',
  projectName: 'enotas',
  organizationName: 'andremw',
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  users,

  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#595a03',
    secondaryColor: '#3e3e02',
  },

  copyright: `Copyright © ${new Date().getFullYear()} (?)`,

  highlight: {
    theme: 'default',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',
  cleanUrl: true,

  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  docsSideNavCollapsible: true,
  enableUpdateBy: true,
  enableUpdateTime: true,
};

module.exports = siteConfig;
