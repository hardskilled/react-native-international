import formatMessage from 'format-message'
import { UIStore } from './store'
import {
    ChangeLocaleFunction,
    InitializationFunction,
    LocaleBuffer,
    LocaleOptions,
    UseIntlReturn
} from "./types/index.type";

const options: LocaleOptions = {
    languages: [],
    localeFromPhone: null,
    defaultFallback: null,
    locale: null,
}

const buffer: LocaleBuffer = {
    translations: {},
}

export const changeLocale: ChangeLocaleFunction = (locale) => {
    if (locale && !buffer.translations[locale]) {
        console.warn(`Locale "${locale}" not found`)
        return null
    }

    options.locale = locale

    console.warn('dbg:000', [options.locale, buffer.translations[options.locale]])

    formatMessage.setup({
        locale: options.locale,
        translations: buffer.translations[options.locale],
    })

    console.warn('dbg:vvv', formatMessage('dailer'))

    UIStore.update((s) => {
        s.locale = locale
    })

    return locale
}

export const initialization: InitializationFunction = ({
   localeFromPhone,
   languages,
   defaultFallback = null
}) => {
    options.localeFromPhone = localeFromPhone()

    if (!languages || !Array.isArray(languages) || languages.length === 0) {
        return
    }

    for (const rq of languages) {
        const lang = rq

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
            meta: lang.meta,
        })

        if (!options.defaultFallback) {
            options.defaultFallback = lang.locale
        }

        buffer.translations[lang.locale] = lang.translations
    }

    if (defaultFallback && !buffer.translations[defaultFallback]) {
        console.warn('Fallback language not found in language packs')
    } else if (defaultFallback) {
        options.defaultFallback = defaultFallback
    }

    console.warn('dbg:buffer.translations', options)

    formatMessage.setup({
        locale: options.defaultFallback,
        translations: buffer.translations[options.defaultFallback],
    })

    return changeLocale(options.localeFromPhone)
}

const getLanguages = (locale) =>
    options.languages.map((language) => ({
        selected: locale === language.locale,
        ...language,
    }))

export const useIntl = (): UseIntlReturn => {
    const locale = UIStore.useState((g) => g.locale || options.defaultFallback)

    return {
        getLanguages: () => getLanguages(locale),
        locale,
        t: formatMessage,
        changeLocale,
    }
}
