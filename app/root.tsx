import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import '~/styles/global.css'
import { LinksFunction, MetaFunction } from '@remix-run/node'
import faviconAssetUrl from '~/assets/favicon.svg'

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

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
