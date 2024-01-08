import { Metadata } from "next";
import { resolve } from "path";

type Props = {
    params: {
        _id: string
    }
}

export const generateMetadata = async (params: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`This is blog ${params.params._id}`)
        }, 100)
    })
    return {
        title: `This is blog ${title}`,
    }
}

const page = (params: Props) => {
  return (
    <div>
      <p>This is the page for {params.params._id}</p>
    </div>
  );
}

export default page;
