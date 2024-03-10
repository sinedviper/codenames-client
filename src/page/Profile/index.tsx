import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import EmojiPicker, { Emoji, EmojiStyle } from 'emoji-picker-react'
import cn from 'classnames'

import {
  BlobAnimation,
  Button,
  Img,
  Input,
  InputDate,
  OrbitAnimation,
  TextHeader,
  TextParagraph,
} from 'components'
import { SvgArrow, SvgCloud, SvgPaintcan, SvgSmile, SvgSpinner } from 'assets/svg'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { getAuth, logout, useUpdateAuthMutation, useUploadImageMutation } from 'store/reducers/auth'

import s from './styles.module.css'
import { useFormik } from 'formik'
import { paramsBuilder } from 'utils/helpers'
import { useState } from 'react'
import { colors } from 'utils/contastants'
import { GithubPicker } from 'react-color'

export const Profile = (): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation('translate')
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(getAuth)
  const [updateUser, { isLoading }] = useUpdateAuthMutation()
  const [uploadImage, { isLoading: isLoad }] = useUploadImageMutation()

  const [emoji, setEmoji] = useState(false)
  const [color, setColor] = useState(false)

  const onSubmit = (params: TInitial) => {
    const date_recover =
      params.date_recover === user?.date_recover ? null : new Date(params.date_recover!)
    updateUser({ id: Number(user?.id), ...params, date_recover })
  }

  const initialValues = {
    [EInitial.USERNAME]: user?.username ?? '',
    [EInitial.PASSWORD]: '',
    [EInitial.DATERECOVERY]: user?.date_recover ?? null,
    [EInitial.NEWPASSWORD]: '',
    [EInitial.STATUS]: user?.status ?? '',
    [EInitial.COLOR]: user?.color ?? '',
  }

  const formik = useFormik<TInitial>({ onSubmit, initialValues, enableReinitialize: true })

  const handleExit = () => {
    dispatch(logout())
  }

  const getRation = () => {
    if (user?.lose && user?.lose > 0 && user?.wins && user?.wins > 0) {
      return user?.lose / user?.wins
    }

    return 0
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
    <div className={s.wrap_profile}>
      <Button variant={'none'} className={s.btn_back} onClick={() => navigate('/')}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader className={s.text_header} type={'h2'}>
        {t('profile')}
      </TextHeader>
      <div className={s.wrap_info}>
        <section className={s.wrap_img} style={{ background: formik.values[EInitial.COLOR] }}>
          {user?.avatar && (
            <Img
              src={import.meta.env.VITE_APP_SERVER_IMAGES + user?.avatar.path}
              className={s.img}
            />
          )}
          <div className={s.wrap_title_text}>
            <p className={s.title_avatar}>{user?.username[0]}</p>
          </div>
          <div
            className={cn(s.wrap_loading, {
              [s.wrap_loading_active]: isLoad,
            })}
          >
            <SvgSpinner className={s.svg_spin} />
          </div>
          {!user?.avatar ? (
            <Button className={s.wrap_change_color} onClick={() => setColor(true)}>
              <SvgPaintcan />
            </Button>
          ) : null}
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
          <Button className={s.wrap_load}>
            <input
              multiple={false}
              type={'file'}
              onChange={handleUpload}
              className={s.input_load}
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
        <section className={s.info}>
          <section className={s.info_text}>
            <TextParagraph>{t('ratinwl')}:</TextParagraph>
            <TextParagraph>{calculateAverage(user?.wins, user?.lose)}</TextParagraph>
          </section>
          <section className={s.info_text}>
            <TextParagraph>{t('points')}:</TextParagraph>
            <TextParagraph>{user?.scores}</TextParagraph>
          </section>
        </section>
      </div>
      <Input
        placeholder={t('Username')}
        {...paramsBuilder({ values: EInitial.USERNAME, formik })}
      />
      <InputDate {...paramsBuilder({ values: EInitial.DATERECOVERY, formik })} />
      <Input
        type={'password'}
        placeholder={t('Password')}
        {...paramsBuilder({ values: EInitial.PASSWORD, formik })}
      />
      <Input
        type={'password'}
        placeholder={t('New password')}
        {...paramsBuilder({ values: EInitial.NEWPASSWORD, formik })}
      />
      <Button
        onClick={() => formik.submitForm()}
        disabled={(!formik.isValid || !formik.dirty) && !isLoading}
        variant={'gradient'}
        text={t('save')}
        load={isLoading}
      />
      {/*<Button text={t('settings')} />*/}
      <Button onClick={handleExit} text={t('exitprofile')} />
      <BlobAnimation
        id={'blob_3'}
        className={s.blob}
        colorBlob={{ first: '--appear', second: '--appear' }}
      />
      <OrbitAnimation strokeWidth={2} strokeLine={15} className={s.orbit_1} />
    </div>
  )
}

type TInitial = {
  [EInitial.USERNAME]: string
  [EInitial.PASSWORD]: string
  [EInitial.NEWPASSWORD]: string
  [EInitial.DATERECOVERY]: Date | null
  [EInitial.COLOR]: string
  [EInitial.STATUS]: string
}

enum EInitial {
  USERNAME = 'username',
  DATERECOVERY = 'date_recover',
  PASSWORD = 'password',
  NEWPASSWORD = 'new_password',
  STATUS = 'status',
  COLOR = 'color',
}

function calculateAverage(num1?: number, num2?: number): string {
  if (!num1 || !num2) {
    return '0.0'
  }
  if (num1 === 0 && num2 === 0) {
    return '0.0'
  } else {
    return ((num1 + num2) / 2).toFixed(1)
  }
}
