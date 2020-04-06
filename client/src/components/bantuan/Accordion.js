import React, { Component } from 'react'
import axios from 'axios';

const data = [
  {
    title: 'Bagaimana Virus Corona Menyebar?',
    post: 'Virus dapat berpindah secara langsung melalui percikan batuk dan napas orang terinfeksi yang kemudian terhirup orang sehat. Virus juga dapat menyebar secara tidak langsung melalui benda-benda yang tercemar virus akibat percikan atau sentuhan tangan yang tercemar virus. Virus bisa tertinggal di permukaan benda-benda dan hidup selama beberapa jam hingga beberapa hari, namun cairan disinfektan dapat membunuhnya. Jika tangan tercemar percikan, virus dapat menyebar melalui sentuhan antar-orang, karena itu penting untuk sering mencuci tangan pakai sabun dan air mengalir serta sementara waktu, menghindari bersalaman atau saling mencium pipi. (Sumber: covid19.go.id)'
  },
  {
    title: 'Apakah Pemindai Termal Dapat Mendeteksi Virus Corona?',
    post: 'Pemindai termal efektif mendeteksi orang yang mengalami demam (yaitu memiliki suhu tubuh lebih tinggi dari normal), yang bisa terjadi karena infeksi Namun, pemindai termal tidak dapat mendeteksi orang yang terinfeksi tetapi belum menunjukkan demam. Ini karena dibutuhkan antara 1 dan 14 hari sebelum orang yang terinfeksi menjadi sakit dan mengalami demam. (Sumber: covid19.go.id)'
  },
  {
    title: 'Mengapa Isolasi Selama 14 Hari Diperlukan?',
    post: 'Virus corona biasanya menunjukkan gejala-gejala dalam 1 – 14 hari. Karena itu, orang yang dicurigai harus diisolasi selama 14 hari, baik di rumah sakit, rumah atau lokasi lain dan dipantau gejala-gejala yang muncul seperti demam, batuk atau sesak napas. Untuk memastikan infeksi virus corona, suspek dapat mengikuti tes beberapa kali. Selama isolasi, suspek harus mengikuti semua perintah petugas kesehatan untuk mencegah penyebaran virus. Di lain pihak, petugas kesehatan dan kita bersama harus selalu menunjukkan empati dan kasih sayang. Mereka yang diisilolasi biasanya mengalami kesepian, kekhawatiran dan yang jelas, sakit yang mereka alami bukanlah kemauan mereka sendiri. Anda dapat mendukung mereka dengan mencari tahu kebutuhan-kebutahan mereka dan membantu sejauh yang Anda bisa. (Sumber: covid19.go.id)'
  },
  {
    title: 'Apakah Saya Harus Menggunakan Masker?',
    post: 'Gunakan masker hanya ketika Anda batuk atau bersin demi melindungi orang lain. Bila Anda tidak memiliki gejala-gejala itu, tidak perlu gunakan masker. Menggunakan masker tidak cukup melindungi diri dari infeksi virus corona. Sering mencuci tangan pakai sabun dan air mengalir lebih efektif melindungi diri Anda dari infeksi. Jumlah masker di pasaran sangat terbatas dan tenaga kesehatan harus mendapatkan masker agar dapat menjalankan tugas-tugas mereka. Kita dapat membantu kerja petugas kesehatan dengan tidak membeli atau menggunakan masker khususnya saat tidak batuk atau bersin. (Sumber: covid19.go.id)'
  }
]

class Accordion extends Component {

  constructor(props){
    super(props);

    this.state = {
      articles: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    axios.get('/api/articles/')
         .then(response => {
           this.setState({
             articles: response.data,
             isLoaded: true
           })
         })
         .catch((err)=> console.log(err))
  }

  render () {
    const {articles, isLoaded} = this.state;
    // console.log(articles)

    if(!isLoaded){
      return (
        <div className='wrapper' >
          <ul className='accordion-list'>
            {data.map((data, index) => {
              return (
                <li className='accordion-list__item' key={index}>
                  <AccordionItem {...data} />
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
    else{
      return (
        <div className='wrapper' >
          <ul className='accordion-list'>
            {articles.map((articles, index) => {
              return (
                <li className='accordion-list-item' key={index}>
                  <AccordionItem {...articles} />
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
}

class AccordionItem extends Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        post,
        title
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div className='accordion-item__line'>
          <h3 className='subheadline'>
            {title}
          </h3>
          <span className='accordion-item__icon'/>
        </div>
          <div className='accordion-item__inner'>
            <div className='accordion-item__content'>
              <p className='accordion-item__paragraph'>
                {post}
              </p>
            </div>
          </div>
      </div>
    )
  }
}

export default Accordion