export type UserType = {
    name:string,
    password:string,
    category: string,
    membership: string,
    saveditems: number[]
}

export type UserContextType = {
    user: UserType | null,
    setUser: (user:UserType|null)=>void;
}
//adhust this
export type ProductType = {
    name: string,
    category: string,
    description: string,
    shippingInformation: string,
    warrantyInformation: string,
    id: string,
    price: number,
    rating: number,
    stock: number,
    image: string,
    reviews?: string,
    simple: boolean
}

//ourProduct ={...data} same but less clean

export type LogoProps= {
    width: string,
    height: string,
    color: string
}