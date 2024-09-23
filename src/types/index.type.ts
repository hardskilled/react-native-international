import { ResourceLanguage, TOptions } from "i18next/typescript/options";

export type Locale = string

export type LanguageMeta = {
    label: Locale;
    [key:string]: string | number
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
    translations: Locale[]
}

export type InitializationParams = {
    localeFromPhone: () => Promise<Locale>;
    languages: LanguagePack[];
    defaultFallback?: Locale | null;
    debug?: boolean;
};

export type ChangeLocaleFunction = (locale: Locale) => Locale | null;

export type InitializationFunction = (params: InitializationParams) => Promise<Locale | null>;

export type TFunction = <
    TResult extends string | object | Array<string | object> | undefined = string,
    TKeys extends string | TemplateStringsArray = string,
    TInterpolationMap extends object = ResourceLanguage
>(
    key: TKeys | TKeys[],
    options?: TOptions<TInterpolationMap> | string,
) => TResult;

export interface UseIntlReturn {
    getLanguages: () => (LanguagePack & { selected: boolean })[];
    locale: Locale | null;
    t: TFunction;
    changeLocale: (locale: Locale) => Locale | null;
}
