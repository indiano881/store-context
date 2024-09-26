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