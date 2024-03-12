import { GithubPicker } from 'react-color'
import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import EmojiPicker, { Emoji, EmojiStyle } from 'emoji-picker-react'

import { Button, Img } from 'components'
import { SvgCloud, SvgPaintcan, SvgSmile, SvgSpinner, SvgTrash } from 'assets/svg'
import { colors } from 'utils/contastants'
import { useAppSelector } from 'utils/hooks'
import { EInitial } from 'utils/enum'
import { FormikProps } from 'formik'
import { TInitial } from 'page'
import { getAuth, useDeleteImageMutation, useUploadImageMutation } from 'store/reducers/auth'

import s from './styles.module.css'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  formik: FormikProps<TInitial>
}

export const ImageWrap = ({ formik, className, ...props }: Props): JSX.Element => {
  const [uploadImage, { isLoading }] = useUploadImageMutation()
  const [deleteImage, { isLoading: isLoadDel }] = useDeleteImageMutation()

  const { user } = useAppSelector(getAuth)

  const [emoji, setEmoji] = useState(false)
  const [color, setColor] = useState(false)

  const handleDeleteImage = () => {
    deleteImage({ id: user!.id })
  }

  const handleUpload = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file, file?.name)
    uploadImage(formData)
    e.target.value = ''
  }

  return (
    <section
      className={cn(className, s.wrap_img)}
      style={{ background: formik.values[EInitial.COLOR] }}
      {...props}
    >
      {user?.avatar && (
        <Img src={import.meta.env.VITE_APP_SERVER_IMAGES + user?.avatar.path} className={s.img} />
      )}
      <div className={s.wrap_title_text}>
        <p className={s.title_avatar}>{user?.username[0]}</p>
      </div>
      <div
        className={cn(s.wrap_loading, {
          [s.wrap_loading_active]: isLoading || isLoadDel,
        })}
      >
        <SvgSpinner className={s.svg_spin} />
      </div>
      {!user?.avatar ? (
        <Button
          className={s.wrap_change_color}
          disabled={formik.dirty}
          onClick={() => setColor(true)}
        >
          <SvgPaintcan />
        </Button>
      ) : (
        <Button className={s.wrap_change_color} disabled={formik.dirty} onClick={handleDeleteImage}>
          <SvgTrash />
        </Button>
      )}
      <Button
        className={cn(s.wrap_smile, {
          [s.wrap_smile_active]: formik.values[EInitial.STATUS],
        })}
        onClick={() => setEmoji(true)}
      >
        {formik.values[EInitial.STATUS] ? (
          <Emoji
            lazyLoad={true}
            size={30}
            unified={formik.values[EInitial.STATUS]}
            emojiStyle={EmojiStyle.APPLE}
          />
        ) : (
          <SvgSmile />
        )}
      </Button>
      <Button className={s.wrap_load} disabled={formik.dirty}>
        <input
          multiple={false}
          type={'file'}
          onChange={handleUpload}
          className={s.input_load}
          disabled={formik.dirty}
          accept='.webp, .png, .jpeg, .jpg, .webm'
        />
        <SvgCloud />
      </Button>
      <div
        className={cn(s.wrap_smile_wrapper, {
          [s.wrap_smile_active]: emoji,
        })}
        onMouseLeave={() => setEmoji(false)}
      >
        <EmojiPicker
          lazyLoadEmojis={true}
          emojiStyle={EmojiStyle.APPLE}
          theme={'dark'}
          onEmojiClick={({ unified }) => {
            formik.handleChange({
              target: { id: EInitial.STATUS, name: EInitial.STATUS, value: unified },
            })
            setEmoji(false)
          }}
        />
      </div>
      {!user?.avatar ? (
        <div
          className={cn(s.wrap_color, {
            [s.wrap_color_active]: color,
          })}
        >
          <GithubPicker
            width={'188px'}
            colors={colors}
            onChangeComplete={() => setColor(false)}
            onChange={(color) => {
              formik.handleChange({
                target: { id: EInitial.COLOR, name: EInitial.COLOR, value: color.hex },
              })
            }}
            className={cn(s.wrap_color_box)}
          />
        </div>
      ) : null}
    </section>
  )
}
