import { roboto } from '@theme-ui/presets'

const Theme = {
    ...roboto ,
    container : {
        nav : {
            bg : 'primary',
            p : '10px',
            color : 'text',
        },
        card : {
            width : '100%',
            maxWidth : '1000px',
            m : '20px auto'
        }
    },
    styles : {
        ...roboto.styles
    }
}

export default Theme