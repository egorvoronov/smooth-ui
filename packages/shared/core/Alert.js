import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'
import { variant } from '@xstyled/system'
import { getRadius } from './theming2/index'
import { alertVariant } from './theming2/alert'
// import {
//   borderRadius,
//   alertPaddingY,
//   alertPaddingX,
//   alertMarginBottom,
//   alertVariant,
// } from './theming/index'
// import createComponent from './createComponent'

function InnerAlert({
  forwardedAs: ForwardedAs = 'p',
  variant = 'primary',
  ...props
}) {
  return <ForwardedAs role="alert" variant={variant} {...props} />
}

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]

const variants = variant({
  key: 'alerts',
  variants: colors.reduce((variants, color) => {
    variants[color] = alertVariant(color)
    return variants
  }, {}),
})

export const Alert = styled(InnerAlert)`
  padding: 2 3;
  margin-bottom: 3;
  border: 1;
  border-color: transparent;
  border-radius: ${getRadius('md')};
  ${variants}
`

Alert.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
}

// const Alert = createComponent(() => ({
//   name: 'alert',
//   omitProps: ['variant'],
//   style: p => css`
//     position: relative;
//     padding: ${alertPaddingY(p)} ${alertPaddingX(p)};
//     margin-bottom: ${alertMarginBottom(p)};
//     border: 1px solid transparent;
//     border-radius: ${borderRadius(p)};
//     ${p.variant && alertVariant(p.variant)(p)};
//   `,
//   propTypes: {
//     children: PropTypes.node,
//     variant: PropTypes.string,
//   },
//   defaultProps: {
//     variant: 'primary',
//   },
// }))

export default Alert
