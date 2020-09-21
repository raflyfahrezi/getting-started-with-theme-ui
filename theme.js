import { roboto } from '@theme-ui/presets'

const Theme = {
    ...roboto ,
    container : {
        card : {
            bg : 'primary',
            p : '20px'
        }
    },
    styles : {
        ...roboto.styles
    }
}

export default Theme