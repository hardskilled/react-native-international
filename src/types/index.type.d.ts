import * as formatMessage from 'format-message';
import type { Locale, Translations } from 'format-message';
export type LanguageMeta = {
    label: Locale;
    [key: string]: string | number;
};
export type LanguagePack = {
    locale: Locale;
    meta: LanguageMeta;
    translations?: Translations;
};
export type LocaleOptions = {
    languages: LanguagePack[];
    localeFromPhone: Locale | null;
    defaultFallback: Locale | null;
    locale: Locale | null;
    translations: {
        [key: Locale]: Translations;
    };
};
export type InitializationParams = {
    localeFromPhone: () => Locale;
    languages: LanguagePack[];
    defaultFallback?: Locale | null;
};
export type ChangeLocaleFunction = (locale: Locale) => Locale | null;
export type InitializationFunction = (params: InitializationParams) => Locale | null;
export interface UseIntlReturn {
    getLanguages: () => (LanguagePack & {
        selected: boolean;
    })[];
    locale: string;
    t: typeof formatMessage;
    changeLocale: (locale: Locale) => Locale | null;
}
//# sourceMappingURL=index.type.d.ts.map