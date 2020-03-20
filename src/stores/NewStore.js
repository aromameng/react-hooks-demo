import { createContext } from "react";
import { observable, action } from "mobx";

class NewStore{
  @observable title = ''

  @action setTitle(title){
    this.title = title
  }
}

export default createContext(new NewStore())