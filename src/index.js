import { Platform, NativeModules } from 'react-native'
import formatMessage from 'format-message'
import { UIStore } from './store'

const getLocateFromPhone = () => {
    if (Platform.OS === 'ios') {
        return (
            NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0]
        )
    }

    return NativeModules.I18nManager.localeIdentifier
}

const getLocale = () => {
    const locale = getLocateFromPhone()

    return locale.split('_').shift()
}

const options = {
    languages: [],
    localeFromPhone: getLocale(),
    defaultFallback: null,
    locale: null,
    translations: {},
}

export const changeLocale = (locale) => {
    if (locale && !options.translations[locale]) {
        return null
    }

    options.locale = locale

    formatMessage.setup({
        locale: options.locale,
        translations: options.translations,
    })

    UIStore.update((s) => {
        s.locale = locale
    })

    return locale
}

export const initialization = (languages, defaultFallback = null) => {
    if (!languages || !Array.isArray(languages) || languages.length === 0) {
        console.warn('No language packs found')
        return
    }

    for (const rq of languages) {
        const lang = rq.default ? rq.default : rq

        if (!lang.locale) {
            console.warn('Check language pack for locales')
            continue
        }

        if (!lang.translations) {
            console.warn(`Not found "translations" object in ${lang.locale} locale`)
            continue
        }

        options.languages.push({
            locale: lang.locale,
            ...lang.meta,
        })

        if (!options.defaultFallback) {
            options.defaultFallback = lang.locale
        }

        options.translations[lang.locale] = lang.translations
    }

    if (defaultFallback && !options.translations[defaultFallback]) {
        console.warn('Fallback language not found in language packs')
    } else if (defaultFallback) {
        options.defaultFallback = defaultFallback
    }

    formatMessage.setup({
        locale: options.defaultFallback,
        translations: options.translations,
    })

    return changeLocale(options.localeFromPhone, false)
}

export const useIntl = () => {
    const locale = UIStore.useState((g) => g.locale || options.defaultFallback)

    const getLanguages = () =>
        options.languages.map((language) => ({
            selected: locale === language.locale,
            ...language,
        }))

    return {
        getLanguages,
        locale,
        t: formatMessage,
        changeLocale,
    }
}
