/**
 * Loading component
 */

import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { FadeLoader } from 'react-spinners'

const override = css`
  display: block;
  margin: 0;
  border-color: red;
  margin: auto;
`
const Loading = ({ loading, size, color }) => {
  return (
    <FadeLoader
      css={override}
      sizeUnit={'px'}
      size={size}
      color={color}
      margin={'20px;'}
      loading={loading}
    />
  )
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}

export { Loading }
