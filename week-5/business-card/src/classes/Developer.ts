interface Dev {
    name : string,
    title : string,
    interests?: string[],
    creds?: string[],
    
}

export default class Developer implements Dev{
    name : string;
    title : string;
    interests?: string[];
    creds?: string[]

    constructor (n : string, title : string, interests : string[],creds : string[])
    {
        this.name = n;
        this.title = title;
        this.interests = interests;
        this.creds = creds
    }
    // constructor (n : string, title : string){
    //     this.name = n;
    //     this.title = title;
    // }
}
