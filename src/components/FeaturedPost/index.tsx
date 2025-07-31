import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";
import PostSummary from "../PostSummary";

export default function FeaturedPost() {
  const slug = 'postSlug'
  const postLink = `/post/${slug}`

  return (
    <>
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group w-full sm:h-96">

        <PostCoverImage linkProps={{
          href: postLink
        }}

          imageProps={{
            width: 0,
            height: 96,
            alt: 'titulo',
            src: '/images/pessoa-altamente-eficaz.png',
            sizes: '100vw',
            priority: true,
            className: 'h-full'
          }}
        />

        <PostSummary
          createdAt="2025-07-31T17:23:02.314Z"
          excerpt="Se você sente que os seus dias passam voando e que nunca há tempo suficiente para tudo, 
          talvez o segredo esteja na forma como você começa as suas manhãs. 
          A rotina matinal de uma pessoa altamente eficaz não é apenas sobre acordar cedo — é 
          sobre assumir o controle do dia antes que o dia assuma o controle de você."
          postHeading="h1"
          postLink="/post/otina-matinal-de-pessoas-altamente-eficazes"
          title="Rotina matinal de pessoas altamente eficazes"
        />
      </section>
    </>
  )
}
