// //tutorial-7//
import { Metadata } from "next";

// //tutorial-17//
type Props = {
  params: { productid: string };
}

// //tutorial-17//
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = params.productid;
  return {
    title: `Product of ${id}`,
  };
};

// //tutorial-7//
// //tutorial-17//
export default function Page({ params }: Props) {
  const product = params.productid;
  return (
    <h1>hello here there is user details of {product}</h1>
  );
}
