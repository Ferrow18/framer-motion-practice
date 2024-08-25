import { Button } from "./button";
import { Container } from "./container";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white sticky top-0 z-20">
        <Container className="flex justify-between items-center min-h-[--header-row-height]">
          <p className="text-xl font-semibold">Birds of Prey</p>
          <Button size="small">Button</Button>
        </Container>
      </header>
    </>
  );
};
