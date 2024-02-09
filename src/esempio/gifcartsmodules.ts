import { datianagrafici, ordine,giftCard } from "./types";


  export function newOrder(datiAnagrafici: datianagrafici):ordine {
    return {
      datiAnagrafici: datiAnagrafici,
      giftcards: []
    }
  }


  export function addGiftCard(order: ordine, giftcard: giftCard )  {
    return {
      datiAnagrafici: order.datiAnagrafici,
      giftcards: [...order.giftcards, giftcard]
    }
  }
