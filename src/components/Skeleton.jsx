import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465.5}
    viewBox="0 0 280 465.5"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="133" cy="125" r="124" />
    <rect x="42" y="261" rx="10" ry="10" width="193" height="18" />
    <rect x="10" y="291" rx="10" ry="10" width="255" height="96" />
    <rect x="13" y="405" rx="10" ry="10" width="92" height="30" />
    <rect x="118" y="396" rx="30" ry="30" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
