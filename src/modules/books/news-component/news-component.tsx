const NewsComponent = () => {
  const newsData = [
    {
      id: 1,
      title: "New Library Books Arrived!",
      description:
        "Check out the latest collection of books added to our library this month.",
      date: "2024-07-10",
    },
    {
      id: 2,
      title: "Reading Marathon Announced",
      description:
        "Join our annual reading marathon and stand a chance to win exciting prizes!",
      date: "2024-07-15",
    },
    {
      id: 3,
      title: "Library Closed for Maintenance",
      description:
        "The library will be closed on July 20th for scheduled maintenance.",
      date: "2024-07-18",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-3">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
            >
              <h3 className="text-md font-semibold">{news.title}</h3>
              <p className="text-sm text-gray-600">{news.description}</p>
              <p className="text-xs text-gray-500 mt-2">Date: {news.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
