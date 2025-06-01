import { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const Users: React.FC<{ posts: UserData[] }> = ({ posts }) => {
  const [newUsers, setNewUsers] = useState<UserData[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setNewUsers([
      ...newUsers,
      { ...newUser, id: posts.length + newUsers.length + 1 },
    ]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">User List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {posts.map((user, key) => (
            <UserCard {...user} key={key} />
          ))}
          {newUsers.map((user, key) => (
            <UserCard {...user} key={`new-${key}`} />
          ))}
        </div>
        {isModalOpen && (
          <UserModal
            onClose={() => setModalOpen(false)}
            onSubmit={handleAddUser}
          />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
