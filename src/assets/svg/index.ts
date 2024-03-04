import { FC, SVGProps } from 'react'

import spinner from './spinner.svg?react'
import globus from './globus.svg?react'
import close from './close.svg?react'
import arrow from './arrow.svg?react'
import eye from './eye.svg?react'
import calendar from './calendar.svg?react'
import paintcan from './paintcan.svg?react'
import warn from './warn.svg?react'

export const SvgWarn: FC<SVGProps<SVGElement>> = warn
export const SvgPaintcan: FC<SVGProps<SVGElement>> = paintcan
export const SvgSpinner: FC<SVGProps<SVGElement>> = spinner
export const SvgGlobus: FC<SVGProps<SVGElement>> = globus
export const SvgClose: FC<SVGProps<SVGElement>> = close
export const SvgArrow: FC<SVGProps<SVGElement>> = arrow
export const SvgEye: FC<SVGProps<SVGElement>> = eye
export const SvgCalendar: FC<SVGProps<SVGElement>> = calendar
