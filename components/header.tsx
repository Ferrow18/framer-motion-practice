import { Button } from "./button";
import { Container } from "./container";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white sticky top-0 z-50">
        <Container className="flex justify-between items-center min-h-[--header-row-height]">
          <a
            href="#hero"
            className="text-xl font-semibold"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Birds of Prey
          </a>
          <Button size="small" className="hover:bg-white/90">
            Button
          </Button>
        </Container>
      </header>
    </>
  );
};
