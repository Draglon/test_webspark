import localFont from "next/font/local";
import { Roboto, Montserrat } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import StoreProvider from "@/store/StoreProvider";
import "@/app/styles.scss";

import { Providers } from "./providers";

const monblan = localFont({
  src: [
    {
      path: "../fonts/icomoon/monblan/monblan.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
});

const montserrat = Montserrat({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<any> | undefined;
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("layout.title"),
    description: t("layout.description"),
  };
}

export default async function RootLayout({ children, params }: Props) {
  const messages = await getMessages();
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <StoreProvider>
      <html
        lang={locale}
        className={`${roboto.className} ${montserrat.className} ${monblan.className}`}
        suppressHydrationWarning
      >
        <body>
          <Providers>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </Providers>
        </body>
      </html>
    </StoreProvider>
  );
}
