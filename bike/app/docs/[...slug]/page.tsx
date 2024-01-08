import React from 'react';

const page = ({
    params,
}: {
    params: {
        slug: string[]
    }
}) => {
    if (params.slug?.length === 2) {
        return (
            <div>
              <p>slug IS equal to 2</p>
              <p>{params.slug[0]} - {params.slug[1]}</p>
            </div>
          );
    } else if (params.slug?.length != 2)  {
        return (
            <div>
              slug is NOT equal to 2
            </div>
          );
    } else {
        return (
            <div>
                <p>This is the default slug page</p>
            </div>
        )
    }
  
}

export default page;

