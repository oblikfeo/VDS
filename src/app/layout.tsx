import { ReactNode } from 'react';

import GlobalProvider from '@common/components/GlobalProvider';
import { fontMagistralRegular } from '@common/constants/fonts';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffc53d" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
                ym(91842308, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
                });
              `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/91842308" style={{ position: 'absolute', left: -9999 }} alt="" />
          </div>
        </noscript>
        <meta name="yandex-verification" content="b02f0c6a1a469197" />
      </head>
      <body className={fontMagistralRegular.className}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
