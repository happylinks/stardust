import React, { PropTypes } from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/jsx'
import 'brace/mode/html'
import 'brace/theme/tomorrow'

function Editor(props) {
  const { id, mode, value, ...rest } = props

  return (
    <AceEditor
      name={id}
      mode={mode}
      theme='tomorrow'
      width='100%'
      value={value}
      editorProps={{ $blockScrolling: Infinity, displayIndentGuides: false }}
      enableBasicAutocompletion
      enableLiveAutocompletion
      highlightActiveLine={false}
      maxLines={Infinity}
      showGutter={false}
      showPrintMargin={false}
      tabSize={2}
      {...rest}
    />
  )
}

Editor.propTypes = {
  height: PropTypes.string,
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['html', 'jsx']),
  value: PropTypes.string.isRequired,
}

Editor.defaultProps = {
  height: '100px',
  mode: 'jsx',
}

export default Editor
