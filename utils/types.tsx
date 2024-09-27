export type UserType = {
    name:string,
    password:string,
    category: string,
    membership: string,
    saveditems: string[]
}

export type UserContextType = {
    user: UserType | null,
    setUser: (user:UserType|null)=>void;
}
//adhust this
export type ProductType = {
    name: string,
    description: string,
    id: string,
    image: string,
    reviews?: string
}

//ourProduct ={...data} same but less clean