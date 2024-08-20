import { json, type LinksFunction, type MetaFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import '~/styles/global.css'
import faviconAssetUrl from '~/assets/favicon.svg'
import { getPublicEnv } from './utils/env.server'
import { useNonce } from './utils/nonce-provider'

export const links: LinksFunction = () => [
  { rel: 'icon', type: 'image+svg', href: faviconAssetUrl },
]

export const meta: MetaFunction = () => {
  return [
    { title: 'WIP Journal' },
    {
      name: 'description',
      content:
        'Your space for recording and reflecting on your project progress.',
    },
  ]
}

export async function loader() {
  return json({
    ENV: getPublicEnv(),
  })
}

export function Layout({ children }: { children: React.ReactNode }) {
  const nonce = useNonce()
  const data = useLoaderData<typeof loader>()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main>{children}</main>
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
