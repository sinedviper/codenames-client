import { DetailedHTMLProps, FocusEvent, HTMLAttributes } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import { enUS, uk } from 'date-fns/locale'
import { useWindowInput } from 'utils/hooks'
import { useTranslation } from 'react-i18next'

import { SvgCalendar } from 'assets/svg'

import { Input } from '../Input'
import { WindowInput } from '../WindowInput'
import s from './styles.module.css'

interface Props
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange' | 'ref' | 'onBlur'
  > {
  id?: string
  name?: string
  value?: Date
  onChange?: (value?: { target: { name?: string; id?: string; value: Date } }) => void
  disabled?: boolean
  error?: string
  onBlur?: (value?: FocusEvent<HTMLInputElement>) => void
}

export const InputDate = ({ id, name, value, onChange, error, onBlur }: Props) => {
  const { i18n } = useTranslation()

  const { showStyle, showWindow, floatingStyles, refs, context, hideWindow, toggleWindow } =
    useWindowInput()

  const handleSaveDate = (value?: Date) => {
    if (onChange && value) {
      onChange({ target: { id, name, value } })
      hideWindow()
    }
  }

  const getLang = () => {
    switch (i18n.language) {
      case 'uk': {
        return uk
      }
      default: {
        return enUS
      }
    }
  }

  return (
    <div className={s.wrap_input}>
      <Input
        ref={refs.setReference}
        id={id}
        name={name}
        value={value ? format(value, 'PPP', { locale: getLang() }) : ''}
        disabled
        error={error}
        btn={<SvgCalendar />}
        onBlur={onBlur}
        handleBtn={toggleWindow}
      />
      <WindowInput
        context={context}
        ref={refs.setFloating}
        className={s.wrap_window}
        isShow={showStyle}
        isShowWindow={showWindow}
        hideWindow={hideWindow}
        cssProperty={floatingStyles}
      >
        <DayPicker
          mode='single'
          captionLayout='dropdown'
          fromYear={1950}
          defaultMonth={value}
          toYear={new Date().getFullYear()}
          showOutsideDays
          selected={value}
          onSelect={handleSaveDate}
          locale={getLang()}
        />
      </WindowInput>
    </div>
  )
}
