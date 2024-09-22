declare module "types/store.type" {
    import { Locale } from "format-message";
    export type UIStoreState = {
        locale: Locale | null;
    };
}
declare module "store" {
    import { Store } from 'pullstate';
    import { UIStoreState } from "types/store.type";
    export const UIStore: Store<UIStoreState>;
}
declare module "types/index.type" {
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
}
declare module "index" {
    import { ChangeLocaleFunction, InitializationFunction, UseIntlReturn } from "types/index.type";
    export const changeLocale: ChangeLocaleFunction;
    export const initialization: InitializationFunction;
    export const useIntl: () => UseIntlReturn;
}
//# sourceMappingURL=index.d.ts.map