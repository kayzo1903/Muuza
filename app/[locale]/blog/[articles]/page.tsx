import Article from "@/app/components/Blogcomponents/Article/Article";

interface PageParams {
  params: {
    articles: string;
  };
}

export default async function Page({ params }: PageParams) {
  const decodedParam = decodeURIComponent(params.articles); // Decode the URL
  return (
    <main className="max-w-screen-lg mx-auto">
      <section className="w-full mx-auto min-h-screen mt-8 md:mt-16 px-4">
        <Article heading={decodedParam} />
      </section>
    </main>
  );
}
