import { ThemeProvider } from 'theme-ui'
import Theme from '../theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={ Theme }>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
