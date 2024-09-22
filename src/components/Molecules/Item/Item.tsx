import { Card } from "../../Atoms/Card";
import { ItemProps } from "./Item.types";
import { useItem } from "./useItem";

export const Item: React.FC<ItemProps> = (props) => {
  const { renderBody, color, className } = useItem(props);
  return (
    <Card className={className} style={{ backgroundColor: color }}>
      {renderBody}
    </Card>
  );
};
