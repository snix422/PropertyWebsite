import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';
import man1 from '../assets/man1.jpg'
import man2 from '../assets/man2.jpg'
import woman from '../assets/woman.jpg'


const teamSlice = createSlice({
  name:'team',
  initialState:{
    persons:[{name:'Mariusz Wojcik',email:'testm@gmail.com', phone:'555 555 555', img:man1, profession:'Agent Nieruchomosci'}, {name:'Fabian Strycinski', email:'testf@gmail.com', phone:'666 666 666', img:man2, profession:'Agent Nieruchomosci'},{name:'Kinga Wloszczynska', email:'testa@gmail.com', phone:'777 777 777', img:woman, profession:'Doradca Kredytow'}]
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


export const store = configureStore({
  reducer: {
    team: teamSlice.reducer
  },
});
