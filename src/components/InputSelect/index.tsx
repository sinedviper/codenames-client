import { DetailedHTMLProps, FocusEvent, HTMLAttributes } from 'react'
import cn from 'classnames'

import { useWindowInput } from 'utils/hooks'
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
  isLoading: boolean
  placeholder?: string
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
}: Props) => {
  const { showStyle, showWindow, floatingStyles, refs, context, hideWindow, toggleWindow } =
    useWindowInput()

  const handleSave = (value: number) => {
    if (onChange && value) {
      onChange({ target: { id, name, value } })
      hideWindow()
    }
  }

  return (
    <div className={s.wrap_input}>
      <Input
        ref={refs.setReference}
        id={id}
        name={name}
        value={arraySelect.find((val) => val.id === value)?.value ?? undefined}
        disabled
        error={error}
        placeholder={placeholder}
        btn={<SvgTriangle />}
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
        <ul className={s.wrapper_list}>
          {arraySelect.map((val) => (
            <li
              key={val.id}
              className={cn(s.list_card, {
                [s.list_card_active]: val.id === value,
              })}
              onClick={() => handleSave(val.id)}
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
