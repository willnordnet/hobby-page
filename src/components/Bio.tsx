
import React from 'react';
import Image from 'next/image';

const Bio = () => {
  return (
    <section id="bio" className="container mx-auto my-8 p-4 flex flex-col items-center">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
        <Image
          src="/willgao.jpg"
          alt="Will Gao"
          width={192}
          height={192}
          className="object-cover"
        />
      </div>
      {/*<h2 className="text-3xl font-bold mb-4">Bio</h2>*/}
      <p className="text-center">
        On a glider in the sky of Enköping, Sweden, I find joy in the freedom of flight and the beauty of nature.
      </p>
    </section>
  );
};

export default Bio;
