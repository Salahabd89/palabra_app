import { useStyles } from "../utils/style";
import Link from "next/link";

export default function Home() {
  const ButtonLink = ({ className, href, hrefAs, children }) => (
    <Link href={href} as={hrefAs}>
      <a className={className}>{children}</a>
    </Link>
  );

  return <></>;
}
