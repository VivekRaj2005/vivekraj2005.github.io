export interface FeatureData {
  desc: string;
  icon: string;
  title: string;
}

// // font-size: 46px;
// margin-top: -32px;
// margin-left: -5px;
function Feature(props: FeatureData) {
  return (
    <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center lg:p-10 p-auto">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
        <i
          className={`w-10 h-10 bi ${props.icon}`}
          style={{ fontSize: "46px", marginTop: "-32px", marginLeft: "-5px" }}
        ></i>
      </div>
      <div className="flex-grow">
        <h2 className="text-white text-lg title-font font-medium mb-3">
          {props.title}
        </h2>
        <p className="leading-relaxed text-base">{props.desc}</p>
      </div>
    </div>
  );
}

export default Feature;
