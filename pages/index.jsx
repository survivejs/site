import React from 'react';
import LatestPost from '../components/LatestPost';
import SocialLinks from '../components/SocialLinks';

const Index = React.createClass({
  displayName: 'Index',
  render: function() {
    const section = this.props.section;

    return (
      <div className='frontpage'>
        <div className='front__heading'>
          <div className='front-heading-content-wrapper'>
            <div className='front-header-wrapper'>
              <div className='front-name'>
                <span className='first'>Survive</span>
                <span className='second'>JS</span>
              </div>

              <h1 className='front-header'>Learn Webpack and React</h1>
              <h3 className='front-motto'>SurviveJS will take you from apprentice to master</h3>

              <div className='front-button-wrapper'>
                <a className='btn btn--buy-main'
                  href='https://leanpub.com/survivejs-react'>Become a React master</a>
                <span className='buy-or'>or</span>
                <a className='btn btn--buy-main'
                  href='https://leanpub.com/survivejs-webpack'>Become a Webpack master</a>
                <span className='buy-or'>(or <a href='https://leanpub.com/b/survivejs-webpack-react'>both</a>!)</span>
              </div>

              <div className='front-button-wrapper'>
                <div className='read-free-note'>There are also free versions available!</div>
                <span className='read-free'>
                  <a href='/react/introduction'>Read the free version of the React book</a> or <a href='/webpack/preface'>read the free version of the webpack book</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='post post--front'>
          <section className='post__content'>
            <LatestPost sectionPages={section.pages} />
            <div dangerouslySetInnerHTML={{__html: require('raw!markdown!./index.md')}} />

            <SocialLinks />

            <LatestPost sectionPages={section.pages} />
          </section>
        </div>
      </div>
    );
  }
});
Index.description = 'Want to learn webpack or React? Get started for free and build a Kanban board by following the example project.';

module.exports = Index;
