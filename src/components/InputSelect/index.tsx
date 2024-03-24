import { DetailedHTMLProps, FocusEvent, HTMLAttributes, useEffect, useState } from 'react'
import cn from 'classnames'

import { useOutsideClick, useWindowInput } from 'utils/hooks'
import { SvgTriangle } from 'assets/svg'

import { Input } from '../Input'
import { TextParagraph, WindowInput } from '../'
import s from './styles.module.css'

interface Props
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange' | 'ref' | 'onBlur'
  > {
  id?: string
  name?: string
  value?: number
  onChange?: (value?: { target: { name?: string; id?: string; value: number } }) => void
  disabled?: boolean
  error?: string
  onBlur?: (value?: FocusEvent<HTMLInputElement>) => void
  arraySelect: Array<{ id: number; value: string }>
  isLoading?: boolean
  placeholder?: string
  isDefault?: boolean
}

export const InputSelect = ({
  id,
  name,
  value,
  onChange,
  error,
  onBlur,
  arraySelect,
  placeholder,
  isLoading,
  isDefault,
}: Props) => {
  const {
    showStyle,
    showWindow,
    showedWindow,
    floatingStyles,
    refs,
    context,
    hideWindow,
    toggleWindow,
  } = useWindowInput()

  const [input, setInput] = useState(arraySelect.find((val) => val.id === value)?.value ?? '')

  const handleSave = (value: { id: number; value: string }) => {
    if (onChange && value) {
      onChange({ target: { id, name, value: value.id } })
      setInput(value.value)
      hideWindow()
    }
  }

  const handleChange = (e) => {
    setInput(e.target.value)
    if (!showWindow && !showStyle) {
      showedWindow()
    }
  }

  useEffect(() => {
    if (typeof isLoading === 'boolean' && !isLoading && isDefault) {
      if (!value) {
        handleSave(arraySelect[0])
      }
    }
  }, [isLoading])

  return (
    <div className={s.wrap_input}>
      <Input
        ref={refs.setReference}
        id={id}
        name={name}
        value={input}
        error={error}
        placeholder={placeholder}
        btn={<SvgTriangle />}
        onBlur={onBlur}
        onClick={() => showedWindow()}
        onChange={handleChange}
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
        <ul className={s.wrapper_list}>
          {arraySelect
            .filter((val) => String(val.value).includes(input))
            .map((val) => (
              <li
                key={val.id}
                className={cn(s.list_card, {
                  [s.list_card_active]: val.id === value,
                })}
                onClick={() => handleSave(val)}
              >
                <TextParagraph type={'p2'} className={s.text_card}>
                  {val.value}
                </TextParagraph>
              </li>
            ))}
        </ul>
      </WindowInput>
    </div>
  )
}
