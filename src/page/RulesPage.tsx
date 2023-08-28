import React from 'react'
import { useTranslation } from 'react-i18next'

import { ContainerLi, ContainerList, ContainerWrapper, Header2, Text } from 'components'

export function RulesPage(): JSX.Element {
  const { t } = useTranslation(['main'])

  return (
    <>
      <Header2>{t('rules.title')}</Header2>
      <ContainerWrapper color={'none'}>
        <Text style={{ textAlign: 'justify' }}>{t('rules.text1')}</Text>
        <ContainerWrapper color={'green'}>
          <Text style={{ textAlign: 'justify' }}>{t('rules.text2')}</Text>
        </ContainerWrapper>
        <Text style={{ textAlign: 'justify' }}>{t('rules.text3')}</Text>
        <ContainerWrapper color={'purple'}>
          <Text style={{ textAlign: 'justify' }}>{t('rules.text4.title')}</Text>
          <ContainerList>
            {'01'.split('').map((val, key) => (
              <ContainerLi key={key}>
                <div
                  style={{
                    borderRadius: '5px',
                    width: '50px',
                    height: '30px',
                    background: t(`rules.text4.text.${key}.color`) ?? 'transparent',
                  }}
                />
                <Text>{t(`rules.text4.text.${key}.text`)}</Text>
              </ContainerLi>
            ))}
          </ContainerList>
        </ContainerWrapper>
        <Text>{t('rules.text5.title')}</Text>
        <ContainerList>
          {'01234'.split('').map((val, key) => (
            <ContainerLi key={key}>
              <Text>- {t(`rules.text5.text.${key}`)}</Text>
            </ContainerLi>
          ))}
        </ContainerList>
        <ContainerWrapper color={'blue'}>
          <Text style={{ textAlign: 'justify' }}>{t('rules.text6')}</Text>
        </ContainerWrapper>
      </ContainerWrapper>
    </>
  )
}
