export type UserType = {
    name:string,
    password:string,
    category: string,
    discount: number,
    saveditems: string[]
}

export type UserContextType = {
    user: UserType | null,
    setUser: (user:UserType)=>void;
}