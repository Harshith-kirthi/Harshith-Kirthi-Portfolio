// SingleInfo.jsx
const SingleInfo = ({ text, Image, link }) => {
  return (
    <div className="flex items-center gap-4 text-white">
      <Image className="text-xl" />
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default SingleInfo;
