const blessed = require('blessed')
const marked = require('marked')
const TerminalRenderer = require('marked-terminal')

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
})

var screen = blessed.screen({
  smartCSR: true
})

const markdown = blessed.box({
  top: 0,
  left: 0,
  width: '100%',
  height: '95%',
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'black',
    border: {
      fg: '#f0f0f0'
    },
    hover: {
      bg: 'green'
    }
  }
})

markdown.setContent(
  marked(`- **[pica](https://nodeca.github.io/pica/demo/)** - high quality and fast image
    resize in browser.`)
)

screen.append(markdown)

screen.render()

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0)
})