export class User{
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public password: string,
  ){}
}

export class BucketList{
  constructor(
    public id: number,
    public name: string,
    public date_created: Date,
    public date_modified: Date,
    public items: BucketItem[],
    public reated_by: number,
    public url: string
  ){}
}

export class BucketItem{
  constructor(
    public id: number,
    public name: string,
    public done: Boolean,
    public date_created: Date,
    public date_modified: Date,
    public url: string
  ){}
}
