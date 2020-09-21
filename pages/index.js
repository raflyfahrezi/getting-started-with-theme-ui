import React from 'react'
import Nav from '../src/component/nav'
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Container = styled.div`
    width : 500px;
    text-align: center;
`

const Input = styled.input`
    padding : 10px 11px;
`


const index = () => {
    return (
        <div>
            <Nav/>
            <h1>Header</h1>
            <p>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.</p>
            <h1>Texting</h1>
            <p>Assalamualaikum</p>
            <Input></Input>
            <Container>
                <p>Testing</p>
            </Container>
            <Button>Im a styled button</Button>
        </div>
    )
}

export default index
