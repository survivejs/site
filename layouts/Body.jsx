import React from 'react';
import GithubCorner from 'react-github-corner';
import Footer from '../components/Footer.jsx';
import Algolia from '../components/Algolia.jsx';
import Gitter from '../components/Gitter.jsx';
import BodyTemplate from './BodyTemplate.jsx';
import Navigation from 'antwar-helpers/components/Navigation';
import RSS from 'antwar-helpers/components/RSS';

export default React.createClass({
  displayName: 'Body',
  render() {
    const props = this.props;
    const section = props.section;
    const pathname = props.location.pathname;

    return (
      <BodyTemplate head={<RSS href="/atom.xml" />} {...props}>
        {props.children}

        {pathname !== '/' ? this.renderNavigation(props, section.name) : null}
        {pathname !== '/' ? this.renderFeedback(props.page.title, section.name) : null}

        <Footer {...props} />

        <GitterChat sectionName={section.name} />

        {pathname !== '/' ? this.renderSearch(section.name) : null}
      </BodyTemplate>
    );
  },
  renderNavigation(props, sectionName) {
    return (
      <Navigation {...props} pages={[
        {
          title: 'Home',
          url: '/',
        },
        {
          title: sectionName === 'blog' ? 'Read the webpack book' : 'Read the blog',
          url: sectionName === 'blog' ? '/webpack/foreword/' : '/blog/',
        },
        {
          title: 'Buy the ebook',
          url: sectionName === 'webpack' ?
            'https://leanpub.com/survivejs-webpack' :
            'https://leanpub.com/survivejs-react',
        },
        {
          title: '',
          url: '',
        },
        {
          title: '@survivejs',
          url: 'https://twitter.com/survivejs',
        },
      ]} />
    );
  },
  renderFeedback(title, sectionName) {
    if (sectionName === 'blog') {
      sectionName = 'site';
    }
    return (
      <GithubCorner
        href={`https://github.com/survivejs/${sectionName}`}
        bannerColor="#fff"
        octoColor="#000"
        width={80}
        height={80}
        direction="right"
        target="_blank"
      />
    );
  },
  renderSearch(sectionName) {
    let apiKey = null;
    let indexName = null;

    if (sectionName === 'react') {
      apiKey = '7a7d80ba370ebaf7a9afa96ad380a1e1';
      indexName = 'survivejs_react';
    }
    else if (sectionName === 'webpack') {
      apiKey = '1182e3806d62e921613b8dc9c7a22ef3';
      indexName = 'survivejs_webpack'
    }
    else {
      return null;
    }

    return (
      <Algolia
        apiKey={apiKey}
        indexName={indexName}
        inputSelector="#search"
      />
    );
  }
});

const GitterChat = ({sectionName}) => {
  if(sectionName === 'webpack' || sectionName === 'react') {
    return <Gitter room={'survivejs/' + sectionName} title="Need help?" />
  }

  return <Gitter room={'survivejs/react'} title="Need help?" />
}
