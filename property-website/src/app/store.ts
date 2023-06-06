import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';
import man1 from '../assets/man1.jpg'
import man2 from '../assets/man2.jpg'
import woman from '../assets/woman.jpg'
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
    items:[{saleType:'sprzedaz',type:'mieszkanie',metraz:'43',pietro:'3',cena:'355 000',winda:'tak',garaz:'tak',city:'Łódz', dostepny:'01.07.2023'},{saleType:'wynajem',type:'mieszkanie',metraz:'57m',pietro:'6',cena:'525 000',winda:'tak',garaz:'tak',city:'Warszawa',dostepny:'1.08.2023',polecane:'yes'},{saleType:'sprzedaz',type:'dom',metraz:'152',cena:'675 000',garaz:'tak',city:'Wrocław',dostepny:'1.08.2023',polecane:'yes'},{saleType:'wynajem',type:'mieszkanie',metraz:'63m',pietro:'3',cena:'550 000',winda:'tak',garaz:'tak',city:'Kraków',dostepny:'1.07.2023'},{saleType:'wynajem',type:'mieszkanie',metraz:'98m',pietro:'6',cena:'925 000',winda:'tak',garaz:'tak',city:'Warszawa',dostepny:'1.08.2023',polecane:'yes'},{saleType:'wynajem',type:'mieszkanie',metraz:'48',pietro:'2',cena:'380 000',winda:'tak',garaz:'nie',city:'Gdańsk',dostepny:'1.07.2023',polecane:'yes'}]
  },
  reducers:{
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
