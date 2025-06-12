import "./Link.css";

export default function Link({ link, evento_link }) {
  return (
    <>
      <a className="link" href="#" onClick={() => evento_link(link)}>
        {link}
      </a>
    </>
  );
}
