import React, { useEffect, useState } from "react";
import useGetUserList from "../Hook/useGetUserList";
import useBackendPing from "../Hook/useBackendPing";

export default function UserList() {
  interface IUser {
    id: number;
    username: string;
  }

  const [userList, setUserList] = useState<IUser[]>([]);

  const getUserList = useGetUserList();
  const backendPing = useBackendPing();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId: number = parseInt((e.currentTarget[0] as HTMLButtonElement).value, 10);
    backendPing(userId).then((data) => console.log(data));
  };

  const handleMessage = (e: MessageEvent) => {
    console.log(e.target);
  };

  useEffect(() => {
    getUserList().then((data) => setUserList(data.users));

    const url = new URL("http://localhost:9090/.well-known/mercure");
    url.searchParams.append("topic", "https://example.com/my-private-topic");

    const eventSource = new EventSource(url.toString(), {
      withCredentials: true,
    });
    eventSource.onmessage = handleMessage;

    return () => {
      eventSource.close();
    };
  }, [getUserList]);

  return (
    <div>
      <h1 className="m-5 text-center">Ping a user</h1>
      {userList.map((user, index) => (
        <form key={index} className="w-75 mx-auto mb-3" onSubmit={handleSubmit}>
          <button className="btn btn-dark w-100" type="submit" value={user.id}>
            {user.username}
          </button>
        </form>
      ))}
    </div>
  );
}