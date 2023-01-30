import { useFetchNotices } from '../../hooks/use-fetch-notices';

export const Notice = () => {
  const { notices, isLoading, isSuccess } = useFetchNotices();

  if (isLoading) return <h2>Loading...!!</h2>;

  console.log(notices);

  return (
    <div>
      {notices?.data.map((notice) => (
        <div>
          {notice.title}::{notice.content}
          <br />
        </div>
      ))}
    </div>
  );
};
