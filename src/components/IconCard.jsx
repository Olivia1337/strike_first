import React from "react";

function IconCard({ icon: Icon, title, text }) {
  return (
    <div className="items-center bg-white text-stone-900 p-6 rounded-lg shadow-sm flex flex-col">
      <Icon size={40} />
      <p className="text-[1.5em] font-bold font-text text-center mt-[1rem]">
        {title}
      </p>
      <p
        className="text-[1em] font-bold font-text text-center mt-[1rem]"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}

export default IconCard;
