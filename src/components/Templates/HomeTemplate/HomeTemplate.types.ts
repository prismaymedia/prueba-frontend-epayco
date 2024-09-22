import { ItemData } from "../../Molecules/Item";

export interface HomeTemplateProps {
  items: ItemData[];
  isCreating: boolean;
  onCreateButtonClick: () => void;
}
