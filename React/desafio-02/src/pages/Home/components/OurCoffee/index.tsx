import coffeeList from "../../../../services/coffee";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeContainer, OurCoffeContainer, Title } from "./styles";

export const OurCoffee: React.FC = () => {
  return (
    <OurCoffeContainer>
      <Title>Nossos cafés</Title>

      <CoffeeContainer>
        {coffeeList.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee.id} />
        ))}
      </CoffeeContainer>
    </OurCoffeContainer>
  );
};
