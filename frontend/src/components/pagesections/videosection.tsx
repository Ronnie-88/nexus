interface VideoSectionProps {
  videoLink: string;
}

export default function VideoSection({ videoLink }: VideoSectionProps) {
  return (
    <>
      <section className="flex gap-8 items-center mx-auto my-4 px-96 py-10 text-white">
        <iframe
          src={videoLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video w-[900px]"
        ></iframe>
      </section>
    </>
  );
}
