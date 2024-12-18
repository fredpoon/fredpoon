import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const page = await getPage(params.slug);

  return (
    <div>
      <h1>{page.title}</h1>
      <div className="prose">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
