
export type User = {
    id: String;
    active_yn: String;
    client_id: String;
    email: String;
    first_name: String;
    group_id: String;
    img_tx: String;
    last_name: String;
}

export type Master_UserWhereUniqueInput = {
    id?: string
    email?:string
  }