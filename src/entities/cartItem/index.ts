import card from "./ui/card";
export default card;
export type { RootState } from "./model/state/store";
export type { cardItemType } from "./model/state/cartSlice";
export { addCard, delCard } from "./model/state/cartSlice";