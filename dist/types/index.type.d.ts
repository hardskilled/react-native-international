import { ResourceLanguage } from "i18next/typescript/options";
import { TFunction } from "i18next/typescript/t";
export type Locale = string;
export type LanguageMeta = {
    label: Locale;
    [key: string]: string | number;
};
export type LanguagePack = {
    locale: Locale;
    meta: LanguageMeta;
    translations?: ResourceLanguage;
};
export type LocaleOptions = {
    languages: LanguagePack[];
    localeFromPhone: Locale | null;
    defaultFallback: Locale | null;
    locale: Locale | null;
};
export type LocaleBuffer = {
    translations: Locale[];
};
export type InitializationParams = {
    localeFromPhone: () => Locale;
    languages: LanguagePack[];
    defaultFallback?: Locale | null;
};
export type ChangeLocaleFunction = (locale: Locale) => Locale | null;
export type InitializationFunction = (params: InitializationParams) => Promise<Locale | null>;
export interface UseIntlReturn {
    getLanguages: () => (LanguagePack & {
        selected: boolean;
    })[];
    locale: Locale | null;
    t: TFunction;
    changeLocale: (locale: Locale) => Locale | null;
    debug?: boolean;
}
//# sourceMappingURL=index.type.d.ts.map