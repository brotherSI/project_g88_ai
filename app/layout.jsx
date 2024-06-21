import '@styles/globals.css';
import { Children } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {

    title: "G88-G AI Promps", 
    description: "Learn and Share AI Prompts with G88-G"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
                <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;