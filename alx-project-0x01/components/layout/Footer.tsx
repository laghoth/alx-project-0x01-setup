const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-10">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} ALX Project
      </p>
    </footer>
  );
};

export default Footer;
