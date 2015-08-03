React = require 'react'
MomentDisplay = React.createFactory require 'antwar-default-theme/MomentDisplay'
Paths = require 'antwar-core/PathsMixin'
Router = require 'react-router'
config = require 'config'

{ div, span, header, h1, a, script } = require 'react-coffee-elements'

module.exports = React.createClass

  displayName: 'Item'

  mixins: [ Router.State, Paths ]

  render: ->
    item = @getItem()
    author = item.author or config.author.name

    div {},
      div className: 'post',
        if item.headerImage? then div className: 'header-image', style: backgroundImage: "url(#{item.headerImage})"
        h1 className: 'post__heading',
          item.title
        div className: 'post__content',
          if item.isDraft then span className: 'draft-text', ' Draft'
          div dangerouslySetInnerHTML: __html: item.content
        if item.headerExtra? then div className: 'header-extra', dangerouslySetInnerHTML: __html: item.headerExtra
        if item.date then MomentDisplay className: 'post__moment', datetime: item.date
        if author then div className: 'post__author', "Authored by #{author}"

        div className: 'social-links', dangerouslySetInnerHTML: __html: '<blockquote class="tip">If you enjoyed this post, consider subscribing to the mailing list below or following <a href="https://twitter.com/survivejs">@survivejs</a> for occasional updates. There is also <a href="/atom.xml">RSS</a> available for old beards (no pun intended).</blockquote><form action="//jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&amp;id=b853b8e786" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><div id="mc_embed_signup_scroll"><div class="mc-field-group"><input type="email" placeholder="Email" value="" name="EMAIL" class="required email" id="mce-EMAIL"></div><!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--><div style="position: absolute; left: -5000px;"><input type="text" name="b_ed40c0084a0c5ba31b3365d65_b853b8e786" tabindex="-1" value=""></div><div class="clear"><input type="submit" class="btn" style="margin-top:1em; margin-bottom: 1em; line-height: 2em" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div></div></form>'

        div id: 'disqus_thread'

        if item.next or item.prev
          div className: 'prevnext',
            if item.prev
                div {className: 'prevnext__prev'},
                  div {className: 'prevnext__bg', style: backgroundImage: "url(#{item.prev.headerImage})"}
                  span className: 'prevnext__info', item.previousInfo || 'You might also like'
                  a className: 'prevnext__link', href: "/#{item.prev.url}", item.prev.title
            if item.next
                div {className: 'prevnext__next'},
                  div {className: 'prevnext__bg', style: backgroundImage: "url(#{item.next.headerImage})"}
                  span className: 'prevnext__info', item.nextInfo || 'Next item'
                  a className: 'prevnext__link', href: "/#{item.next.url}", item.next.title
      script {type: 'text/javascript', dangerouslySetInnerHTML: __html: "var disqus_shortname = 'survivejs';(function() {var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);})();"}
