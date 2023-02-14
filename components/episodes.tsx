type Episode = {
  title: string;
  pubDate: string;
  description: string;
  enclosure: {
    '@_url': string;
  };
};

export const getPod = async () => {
  const RSS_URL = 'https://anchor.fm/s/bb99f168/podcast/rss';
  const res = await fetch(RSS_URL, { next: { revalidate: 60 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const fs = require('fs');
  const text = await res.text();

  const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser');

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
  });
  let json = parser.parse(text);
  return json.rss.channel.item;
};

const Episodes = async () => {
  const episodes = await getPod();
  return (
    <div className="">
      {episodes.map((episode: Episode) => (
        <div
          key={episode.title}
          className="mb-8 rounded-2xl border border-white p-4"
        >
          <div className="mb-2 flex items-baseline justify-between">
            <h1>{episode.title}</h1>
            <p>{new Date(episode.pubDate).toLocaleDateString('en-US')}</p>
          </div>

          <div
            className="mb-2"
            dangerouslySetInnerHTML={{ __html: episode.description }}
          />

          <div className="container mx-auto w-fit">
            <audio controls>
              <source src={episode.enclosure['@_url']} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Episodes;
