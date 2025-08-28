// import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

type Meta = {
  title: string;
  description?: string;
};

type MetaComponentProps = {
  meta: Meta;
};

export default function MetaComponent({ meta }: MetaComponentProps) {
  useEffect(() => {
    const updateMeta = () => {
      document.title = meta.title;
    };
    updateMeta();

    return () => {
      document.title = "Onsus - Multipurpose Reactjs eCommerce Template";
    };
  }, [meta.title]);

  return (
    // <HelmetProvider>
    //   <Helmet>
    //     <title>{meta.title}</title>
    //     <meta name="description" content={meta.description} />
    //   </Helmet>
    // </HelmetProvider>
    <></>
  );
}
