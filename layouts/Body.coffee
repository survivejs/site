React = require 'react'
Nav = React.createFactory require 'antwar-default-theme/Nav'
Paths = require('antwar-core/PathsMixin')
require 'antwar-default-theme/scss/main.scss'

require 'react-ghfork/gh-fork-ribbon.ie.css' # ie support
require 'react-ghfork/gh-fork-ribbon.css'
Fork = React.createFactory(require 'react-ghfork')

{ div, main, script, link } = require 'react-coffee-elements'

config = require 'config'
if config.theme.customStyles?
  require 'customStyles/' + config.theme.customStyles

module.exports = React.createClass

    displayName: 'Body'

    mixins: [
        Paths
    ]

    render: ->
        sectionName = @getSectionName()

        div { },
            if sectionName and sectionName != '/'
                Nav()
                Fork { className: 'right', project: 'survivejs/webpack_react/issues/new', text: 'Submit feedback', style: {backgroundColor: 'black'}}
            main { role: 'main' }, @props.children
