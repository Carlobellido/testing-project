import { datianagrafici, ordine } from "./types";


  export function newOrder(datiAnagrafici: datianagrafici):ordine {
    return {
      datiAnagrafici: datiAnagrafici,
      giftcards: []
    }
  }
