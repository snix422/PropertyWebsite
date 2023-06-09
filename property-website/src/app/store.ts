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
    items:[{id:1,saleType:'sprzedaz',type:'mieszkanie',metraz:'43',pietro:'3',cena:'355 000',winda:'tak',garaz:'tak',city:'Łódz', dostepny:'01.07.2023', images:{
      imgMain:Lodz1Main,
      img2: Lodz1Kuchnia,
      img3:Lodz1Lazienka

    }},{id:2,saleType:'wynajem',type:'mieszkanie',metraz:'57m',pietro:'6',cena:'525 000',winda:'tak',garaz:'tak',city:'Warszawa',dostepny:'1.08.2023',polecane:'yes',images:{
      imgMain:W2Main,
      img2: W2Kuchnia,
      img3:W2Lazienka
    }
  },{id:3,saleType:'sprzedaz',type:'dom',metraz:'152',cena:'675 000',garaz:'tak',city:'Wrocław',dostepny:'1.08.2023',polecane:'yes',images:{
    imgMain:Wroclaw1Main,
    img2: WroclawKuchnia,
    img3:WroclawLazienka
  }},
  {id:4,saleType:'wynajem',type:'mieszkanie',metraz:'63m',pietro:'3',cena:'550 000',winda:'tak',garaz:'tak',city:'Kraków',dostepny:'1.07.2023',images:{
    imgMain:Krakow1Main,
    img2: Krakow1Kuchnia,
    img3:Krakow1Lazienka
  }},
  {id:5,saleType:'wynajem',type:'mieszkanie',metraz:'98m',pietro:'6',cena:'925 000',winda:'tak',garaz:'tak',city:'Warszawa',dostepny:'1.08.2023',polecane:'yes',images:{
    imgMain:W1Main,
    img2: W1Kuchnia,
    img3:W1Lazienka
  }},
  {id:6,saleType:'wynajem',type:'mieszkanie',metraz:'48',pietro:'2',cena:'380 000',winda:'tak',garaz:'nie',city:'Gdańsk',dostepny:'1.07.2023',polecane:'yes',images:{
    imgMain:Gdansk1Main,
    img2: Gdansk1Kuchnia,
    img3:Gdansk1Lazienka
  }}]
  },
  reducers:{
    getProduct(state:any,action:any){
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
    addItem(state:any,action:any){
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
    removeAllItems(state:any){
      state.items = [];
    }
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


export const store = configureStore({
  reducer: {
    team: teamSlice.reducer,
    offers: offersSlice.reducer,
    search: searchSlice.reducer
  },
});
