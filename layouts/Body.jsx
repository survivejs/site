import React from 'react';
import Fork from 'react-ghfork';
import Footer from '../components/Footer.jsx';
import Gitter from '../components/Gitter.jsx';
import Body from 'antwar-helpers/layouts/Body';
import Navigation from 'antwar-helpers/components/Navigation';
import RSS from 'antwar-helpers/components/RSS';

export default React.createClass({
  displayName: 'Body',
  render() {
    const props = this.props;
    const section = props.section;
    const pathname = props.location.pathname;

    return (
      <Body head={<RSS />} {...props}>
        {props.children}

        {pathname !== '/' ? this.renderNavigation(props, section.name) : null}
        {pathname !== '/' ? this.renderFeedback(props.page.title, section.name) : null}

        <Footer {...props} />

        <GitterChat sectionName={section.name} />
      </Body>
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
          title: sectionName === 'blog' ? 'Read the React book' : 'Read the blog',
          url: sectionName === 'blog' ? '/react/introduction/' : '/blog',
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
    return <Fork className="right ribbon"
      project={`survivejs/${sectionName}/issues/new?title=${title} - `}
      text="Submit feedback"
      style={{backgroundColor: 'black'}}
      target="_blank" />;
  }
});

const GitterChat = ({sectionName}) => {
  if(sectionName === 'webpack' || sectionName === 'react') {
    return <Gitter room={'survivejs/' + sectionName} title="Need help?" />
  }

  return <Gitter room={'survivejs/react'} title="Need help?" />
}
