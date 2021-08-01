import { useTranslation } from 'next-i18next';

export default function HeaderBackground () {
    const { t } = useTranslation('header')

    return (
        <div className="h-screen w-screen bg-grey-dark text-grey-light flex flex-col items-center justify-center animate-header-background">
            <h1 className="text-6xl font-light">{ t('name') }</h1>
            <p className="text-3xl">{ t('title') }</p>
        </div>
    )
}
