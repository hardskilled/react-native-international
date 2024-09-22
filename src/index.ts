import i18next from 'i18next';
import { UIStore } from './store'

import {
    ChangeLocaleFunction,
    InitializationFunction,
    LocaleBuffer,
    LocaleOptions,
    UseIntlReturn
} from "./types/index.type";
import {InitOptions} from "i18next/typescript/options";

const options: LocaleOptions = {
    languages: [],
    localeFromPhone: null,
    defaultFallback: null,
    locale: null,
}

const buffer: LocaleBuffer = {
    translations: [],
}

export const changeLocale: ChangeLocaleFunction = (locale) => {
    if (locale && !buffer.translations.includes(locale)) {
        console.warn(`Locale "${locale}" not found`)
        return null
    }

    options.locale = locale

    i18next.changeLanguage(locale, () => {
        UIStore.update((s) => {
            s.locale = locale
        })
    })

    return locale
}

export const initialization: InitializationFunction = async ({
   localeFromPhone,
   languages,
   defaultFallback = null,
   debug = false
}, lang = null) => {
    options.localeFromPhone = localeFromPhone()

    const i18nextParams: InitOptions = {
        compatibilityJSON: 'v3',
        lng: defaultFallback,
        debug,
        resources: {}
    }

    for (const language of languages) {
        i18nextParams.resources[language.locale] = {
            translation: language.translations
        }

        buffer.translations.push(language.locale)
    }

    await i18next.init(i18nextParams);

    return changeLocale(options.localeFromPhone)
}

const getLanguages = (locale) =>
    options.languages.map((language) => ({
        selected: locale === language.locale,
        ...language,
    }))

export const useIntl = (): UseIntlReturn => {
    const locale = UIStore.useState((g) => g.locale || options.defaultFallback)

    return <UseIntlReturn>{
        getLanguages: () => getLanguages(locale),
        locale,
        t: i18next.t,
        changeLocale,
    }
}
