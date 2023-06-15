
export interface ItemsTypes {
    id:number,
    saleType:string,
    type:string,
    metraz:number,
    pietro?:number,
    cena:string,
    winda?:string,
    garaz?:string,
    city:string,
    dostepny:string,
    polecane?:string
    images:{
        imgMain:string,
        img2:string,
        img3:string
    },
    desc:string,
    contact:{
        phone:string,
        email:string
    }
}

export interface PersonsType {
    name:string,
    email:string,
    phone:string,
    img:string,
    profession:string
}