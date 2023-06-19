import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';
import man1 from '../assets/man1.jpg'
import man2 from '../assets/man2.jpg'
import woman from '../assets/woman.jpg'
import W1Main from '../assets/Warszawa1-Main.webp'
import W1Kuchnia from '../assets/Warszawa1-Kuchnia.webp'
import W1Lazienka from '../assets/Warszawa1-Lazienka.webp'
import W2Main from '../assets/Warszawa2-Main.webp'
import W2Kuchnia from '../assets/Warszawa2-Kuchnia.webp'
import W2Lazienka from '../assets/Warszawa2-Lazienka.webp'
import Lodz1Main from '../assets/Lodz1Main.webp'
import Lodz1Kuchnia from '../assets/Lodz1Kuchnia.webp'
import Lodz1Lazienka from '../assets/LodzLazienka.webp'
import Wroclaw1Main from '../assets/WroclawMain.webp'
import WroclawKuchnia from '../assets/Wroclaw1Kuchnia.webp'
import WroclawLazienka from '../assets/Wroclaw1-Lazienka.webp'
import Krakow1Main from '../assets/Krakow1Main.webp'
import Krakow1Kuchnia from '../assets/Krakow1Kuchnia.webp'
import Krakow1Lazienka from '../assets/Krakow1Lazienka.webp'
import Gdansk1Main from '../assets/Gdansk1Main.webp'
import Gdansk1Kuchnia from '../assets/Gdansk1Kuchnia.webp'
import Gdansk1Lazienka from '../assets/Gdansk1Lazienka.webp'
import { useState } from 'react';

const teamSlice = createSlice({
  name:'team',
  initialState:{
    persons:[{name:'Mariusz Wojcik',email:'testm@gmail.com', phone:'555 555 555', img:man1, profession:'Agent Nieruchomosci'}, {name:'Fabian Strycinski', email:'testf@gmail.com', phone:'666 666 666', img:man2, profession:'Agent Nieruchomosci'},{name:'Kinga Wloszczynska', email:'testa@gmail.com', phone:'777 777 777', img:woman, profession:'Doradca Kredytow'}]
  },
  reducers:{

  }
})

const offersSlice = createSlice({
  name:'offers',
  initialState:{
    items:[{id:1,saleType:'sprzedaz',type:'mieszkanie',metraz:43,pietro:3,cena:355000,winda:'tak',garaz:'tak',city:'Łódź', dostepny:'01.07.2023', images:{
      imgMain:Lodz1Main,
      img2: Lodz1Kuchnia,
      img3:Lodz1Lazienka
    },
    desc:'Wygodne mieszkanie i parking z numerowanym miejscem przypisanym do mieszkania w rejonie skrzyżowania ulic Narutowicza i Kopcińskiego. Posesja zamykana i bezpieczna. Druga linia zabudowy, więc cisza i spokój. Rewelacyjna lokalizacja dla studentów. Doskonała komunikacja miejska i szybki wyjazd z miasta w każdym kierunku.',
    contact:{
      phone:'888 888 888',
      email:'lodzbiuro@gmail.com'
    }
  },{id:2,saleType:'wynajem',type:'mieszkanie',metraz:57,pietro:6,cena:525000,winda:'tak',garaz:'tak',city:'Warszawa',dostepny:'1.08.2023',polecane:'yes',images:{
      imgMain:W2Main,
      img2: W2Kuchnia,
      img3:W2Lazienka
    },
    desc:'Do sprzedaży funkcjonalne 2 pokojowe mieszkanie z jadalnią oraz kuchnią o łącznej powierzchni 43 m2. Centralną częścią mieszkania jest kuchnia z jadalnią. W pełni wyposażona kuchnia w nowy sprzęt AGD takie jak; lodówka, zmywarka, płyta indukcyjna. Spora ilość okien w mieszkaniu zapewnia dostęp do naturalnego światła dzięki czemu mieszkanie jest słoneczne. Ekspozycja zachodnia.',
    contact:{
      phone:'555 555 555',
      email:'biurowarszawa@gmail.com'
    }
  },{id:3,saleType:'sprzedaz',type:'dom',metraz:152,cena:675000,garaz:'tak',city:'Wrocław',dostepny:'1.08.2023',polecane:'yes',images:{
    imgMain:Wroclaw1Main,
    img2: WroclawKuchnia,
    img3:WroclawLazienka
  },
  desc:'Mieszkanie 2pokojowe,nowe,balkon,garaż podziemny.Do wynajęciaNOWE 2pokojowe mieszkanie z balkonem i miejscem postojowym w garażu podziemnym/w cenie/.,na 1-szym piętrze.Budynek posiada windę oraz pomieszczenia na rowery,wózki.Mieszkanie składa się z salonu z kuchnią ,sypialni,łazienki z kabiną prysznicową ,przedpokoju oraz balkonu.Mieszkanie jest umeblowane ,wyposażone w nowe sprzęty:zmywarka,płyta indukcyjna,piekarnik,lodówka,okap z wyciągiem,pralka.W pobliżu komunikacja miejska,Biedronka,Żabka,Rossman,restauracje,cukiernie.Niedaleko Park Brochów,tereny spacerowe,ścieżki rowerowe.',
  contact:{
    phone:'777 777 777',
    email:'wroclawbiuro@gmail.com'
  }
},
  {id:4,saleType:'wynajem',type:'mieszkanie',metraz:63,pietro:3,cena:550000,winda:'tak',garaz:'tak',city:'Kraków',dostepny:'1.07.2023',images:{
    imgMain:Krakow1Main,
    img2: Krakow1Kuchnia,
    img3:Krakow1Lazienka
  },
  desc:'Dwa osobne pokoje .Mieszkanie odnowione,nowe meble w pokojach i kuchni. Dużo miejsc parkingowych przy budynku.Świadectwo energetyczne do okazania przy umowie najmu. W czynszu naliczenia mediów dla 2 osób. Budynek ocieplony w 2015r.',
  contact:{
    phone:'444 444 444',
    email:'krakowbiuro@gmail.com'
  }
},
  {id:5,saleType:'wynajem',type:'mieszkanie',metraz:98,pietro:6,cena:925000,winda:'tak',garaz:'tak',city:'Warszawa',dostepny:'1.08.2023',polecane:'yes',images:{
    imgMain:W1Main,
    img2: W1Kuchnia,
    img3:W1Lazienka
  },
  desc:'Metro Centrum Nauki Kopernik, BUW, Bulwary Wiślane. Mieszkanie w kamienicy, duży pokój około 27m.kw, umeblowany, strefa dzienna, sypialna, oraz stolik do pracy. W przestronnym przedpokoju aneks kuchenny z lodówką, zmywarką, pralką, kuchenką mikrofalową oraz kuchenką indukcyjną 2 palnikową. Łazienka z przedwojennymi kafelkami na ścianach i wanną. Dla najemcy dostępna piwnica. Zamknięte podwórko, możliwość parkowania roweru.',
  contact:{
    phone:'555 555 555',
    email:'biurowarszawa@gmail.com'
  }
},
  {id:6,saleType:'wynajem',type:'mieszkanie',metraz:48,pietro:2,cena:380000,winda:'tak',garaz:'nie',city:'Gdańsk',dostepny:'1.07.2023',polecane:'yes',images:{
    imgMain:Gdansk1Main,
    img2: Gdansk1Kuchnia,
    img3:Gdansk1Lazienka
  },
  desc:'Odkryj już dziś wyjątkową propozycję niepowtarzalnego domu w zabudowie szeregowej w inwestycji Płocka Park na gdańskim Ujeścisku.Ten piękny DOM składa się z 4 kondygnacji o łącznej powierzchni 231 m2, oferując oryginalnie zaprojektowane i doskonale rozplanowane wnętrza.',
  contact:{
    phone:'666 666 666',
    email:'biurogdansk@gmail.com'
  }
}]
  },
  reducers:{
    getProduct(state,action){
      const id = action.payload;
      const product = state.items.filter((product:any)=>product.id == id);
      state.items = product;
      console.log(state.items);
    }
  }
})


const searchSlice = createSlice({
  name:'search',
  initialState:{
    items:[]
  },  
  reducers:{
    addItem(state:any,action){
      const element = action.payload;
      console.log(element.length)
      console.log(...element)

      if(element.length>0){
        state.items = [];
        for(const value of element){
          state.items.push(value);
        }
      }
    },
    removeAllItems(state){
      state.items = [];
    }
  }
})


const reviewsSlice = createSlice({
  name:'reviews',
  initialState:{
    items:[
      {person:'Pan',client:'Marek', content:'Polecam są to bardzo doświadczeni profesjonaliści znający się na nieruchomościach'},
      {person:'Pani',client:'Katarzyna', content:'Bardzo szybki kontakt oraz realizacja, bardzo Polecam'},
      {person:'Pan',client:'Wojciech',content:'Polecam bardzo, jestem bardzo zadowolony z biura nieruchomości'},
      {person:'Pani',client:'Kinga', content:'Najbardziej profesjonalne biuro nieruchomości z którym miałam kontakt, polecam'},
      {person:'Pan',client:'Dawid', content:'Bardzo mili i komunikatywni agenci, bardzo Polecam'}
    ]
  },
  reducers:{

  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const teamActions = teamSlice.actions 
export const offersActions = offersSlice.actions
export const searchActions = searchSlice.actions
export const reviewsActions = reviewsSlice.actions


export const store = configureStore({
  reducer: {
    team: teamSlice.reducer,
    offers: offersSlice.reducer,
    search: searchSlice.reducer,
    reviews: reviewsSlice.reducer
  },
});
