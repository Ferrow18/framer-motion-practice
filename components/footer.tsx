import { PhotosArray } from "@/app/api/photos/route";
import { Container } from "@/components/container";
import { photosData } from "@/data/photosData";

export const Footer = ({ photos }: { photos: PhotosArray }) => {
  const { photos1, photos2 } = photos;

  const allPhotos = [...photos1, ...photos2];

  const uniqueAuthors = allPhotos.filter((photo, index) => {
    return (
      allPhotos.findIndex((p) => p.authorName === photo.authorName) === index
    );
  });

  return (
    <div
      className="relative h-[800px] bg-backgroundContrast"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <Container className="sticky h-[800px] top-[calc(100vh-800px)]">
          <div className="flex flex-col justify-between h-full text-white">
            <div className="flex gap-4 pt-24 justify-between">
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold underline">Pexels</p>
                <div className="flex flex-col gap-2">
                  {uniqueAuthors.map((photo, index) => (
                    <a
                      key={photo.authorName + index}
                      href={photo.authorUrl}
                      target="_blank"
                    >
                      {photo.authorName}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold underline">Unsplash</p>
                <div className="flex flex-col gap-2">
                  {photosData.map((photo) => (
                    <a key={photo.name} href={photo.authorUrl} target="_blank">
                      {photo.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="pb-12 space-y-4">
              <a
                href="#hero"
                className="text-3xl font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Birds of Prey
              </a>
              <p className="text-sm">
                All images are from{" "}
                <a
                  href="https://www.pexels.com"
                  target="_blank"
                  className="text-[#05705A] font-semibold hover:underline"
                >
                  Pexels
                </a>{" "}
                and{" "}
                <a
                  href="https://www.unsplash.com"
                  target="_blank"
                  className="text-[#ffff00c7] hover:underline"
                >
                  Unsplash
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

<a href="https://unsplash.com/@brunoramoslara?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
  Bruno Ramos Lara
</a>;
