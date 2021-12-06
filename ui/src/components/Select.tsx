import React, { Component } from 'react'

import CreatableSelect from 'react-select/creatable'
import { KeyOption, keyOptions } from 'components/SelectData'
import { ActionMeta, OnChangeValue } from 'react-select'

export default class Select extends Component<{}> {
  handleChange = (newValue: OnChangeValue<KeyOption, true>, actionMeta: ActionMeta<KeyOption>) => {
    console.group('Value Changed')
    console.log(newValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
  }
  render() {
    return <CreatableSelect isMulti onChange={this.handleChange} options={keyOptions} />
  }
}
