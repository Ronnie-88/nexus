interface VideoSectionProps {
  videoLink: string;
}

export default function VideoSection({ videoLink }: VideoSectionProps) {
  return (
    <>
      <section
        className="sm:px-24 
        lg:flex lg:gap-8 lg:items-center lg:my-4 lg:px-48 lg:py-10
        xl:px-48
        2xl:px-96 
        px-5 text-white"
      >
        <iframe
          src={videoLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="sm:aspect-video sm:w-[450px] 
          lg:aspect-video lg:w-[900px] 
          aspect-square"
        ></iframe>
      </section>
    </>
  );
}
