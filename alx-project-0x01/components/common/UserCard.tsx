import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-2">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
      <p className="text-gray-600">
        {address.street}, {address.city}
      </p>
      <p className="text-gray-600">📞 {phone}</p>
      <p className="text-blue-500 underline">{website}</p>
      <p className="text-gray-700 mt-2">
        🏢 {company.name} - <i>{company.catchPhrase}</i>
      </p>
    </div>
  );
};

export default UserCard;
