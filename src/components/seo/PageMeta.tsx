import { Helmet } from "react-helmet-async";
import { site } from "@/data/site";

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: object;
}

const PageMeta = ({ title, description, path, image, jsonLd }: PageMetaProps) => {
  const url = `${site.domain}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default PageMeta;
